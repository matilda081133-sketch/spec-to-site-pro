<?php
// send.php

// Настройки
$to = "callcenter@zdorovie48.ru"; // Куда отправлять
$subject = "Новая заявка с сайта (Спецпроект - Биоревитализация)";

// Разрешаем CORS, если нужно
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Content-Type");
header("Content-Type: application/json; charset=UTF-8");

// Получаем данные из JSON (от React)
$json = file_get_contents('php://input');
$data = json_decode($json, true);

// Если данные пришли как обычный POST
$name = $data['name'] ?? $_POST['name'] ?? '';
$phone = $data['phone'] ?? $_POST['phone'] ?? '';

if (empty($name) || empty($phone)) {
    echo json_encode(["status" => "error", "message" => "Имя или телефон пустые"]);
    exit;
}

// Формируем письмо
$message = "
<html>
<head>
  <title>Новая заявка</title>
</head>
<body>
  <h2>Новая заявка на процедуру!</h2>
  <p><strong>Имя:</strong> " . htmlspecialchars($name) . "</p>
  <p><strong>Телефон:</strong> " . htmlspecialchars($phone) . "</p>
</body>
</html>
";

// Заголовки для отправки HTML-письма
$headers = "MIME-Version: 1.0" . "\r\n";
$headers .= "Content-type:text/html;charset=UTF-8" . "\r\n";

// От кого (лучше использовать доменную почту, чтобы не попадало в спам)
$domain = $_SERVER['SERVER_NAME'];
if (empty($domain)) $domain = "zdorovie48.ru";
$headers .= "From: noreply@" . $domain . "\r\n";

// Отправляем
$mail_sent = mail($to, $subject, $message, $headers);

if ($mail_sent) {
    echo json_encode(["status" => "success", "message" => "Заявка отправлена"]);
} else {
    echo json_encode(["status" => "error", "message" => "Ошибка отправки почты. Сервер не настроен для функции mail()."]);
}
?>
