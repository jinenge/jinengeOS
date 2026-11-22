<?php
$nick = trim($_POST['nick'] ?? '匿名');
$text = trim($_POST['msg'] ?? '');
if(!$text) exit;

$ip = $_SERVER['REMOTE_ADDR'];
$data = json_decode(@file_get_contents('data.json'), true) ?? [];

array_unshift($data, [
    'id'    => uniqid(),
    'ip'    => $ip,
    'nick'  => $nick,
    'text'  => $text,
    'time'  => date('m-d H:i'),
    'reply' => []
]);

file_put_contents('data.json', json_encode($data, JSON_PRETTY_PRINT));
