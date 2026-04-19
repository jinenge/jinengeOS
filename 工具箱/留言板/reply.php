<?php
$mid = $_POST['mid'] ?? '';
$txt = trim($_POST['content'] ?? '');
if(!$mid || !$txt) exit;

$ip = $_SERVER['REMOTE_ADDR'];
$data = json_decode(@file_get_contents('data.json'), true) ?? [];

foreach ($data as &$item) {
    if ($item['id'] === $mid) {
        array_unshift($item['reply'], [
            'ip'      => $ip,
            'content' => $txt,
            'time'    => date('m-d H:i')
        ]);
        break;
    }
}

file_put_contents('data.json', json_encode($data, JSON_PRETTY_PRINT));
