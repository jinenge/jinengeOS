<?php
$data = json_decode(@file_get_contents('data.json'), true) ?? [];

foreach ($data as $m) {
    $id   = htmlspecialchars($m['id']);
    $ip   = htmlspecialchars($m['ip']);
    $nk   = htmlspecialchars($m['nick']);
    $tx   = htmlspecialchars($m['text']);
    $ti   = htmlspecialchars($m['time']);

    echo "<div class='msg'>";
    echo "<div class='nick'>$nk</div>";
    echo "<div class='text'>$tx</div>";
    echo "<div class='info'>IP：$ip • $ti</div>";
    echo "<div class='reply-btn' onclick='reply(\"$id\")'>回复</div>";

    foreach ($m['reply'] as $r) {
        $rip = htmlspecialchars($r['ip']);
        $rtx = htmlspecialchars($r['content']);
        $rti = htmlspecialchars($r['time']);
        echo "<div class='reply'>$rtx<br><small>$rip • $rti</small></div>";
    }
    echo "</div>";
}
