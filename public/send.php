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

// Отправляем почту
$mail_sent = mail($to, $subject, $message, $headers);

// --- ИНТЕГРАЦИЯ С БИТРИКС24 ---
$b24_webhook = "https://dm2ru.bitrix24.ru/rest/29549/vggfz97f5pleiyuq/crm.lead.add.json";

$b24_queryData = http_build_query([
    'fields' => [
        'TITLE' => "Заявка с сайта (Биоревитализация)",
        'NAME' => $name,
        'PHONE' => [
            [
                'VALUE' => $phone,
                'VALUE_TYPE' => 'WORK'
            ]
        ],
        'SOURCE_ID' => 'WEB' // Источник: Веб-сайт
    ],
    'params' => [
        'REGISTER_SONET_EVENT' => 'Y' // Регистрировать событие в живой ленте
    ]
]);

$curl = curl_init();
curl_setopt_array($curl, [
    CURLOPT_SSL_VERIFYPEER => 0,
    CURLOPT_POST => 1,
    CURLOPT_HEADER => 0,
    CURLOPT_RETURNTRANSFER => 1,
    CURLOPT_URL => $b24_webhook,
    CURLOPT_POSTFIELDS => $b24_queryData,
]);

$b24_result = curl_exec($curl);
curl_close($curl);
// -----------------------------

if ($mail_sent || $b24_result) {
    echo json_encode(["status" => "success", "message" => "Заявка отправлена"]);
} else {
    echo json_encode(["status" => "error", "message" => "Ошибка отправки."]);
}
?>
