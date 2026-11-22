<?php
$data = json_decode(@file_get_contents('data.json'), true) ?? [];

foreach ($data as $m) {
    $id   = htmlspecialchars($m['id']);
    $ip   = htmlspecialchars($m['ip']);
    $nk   = htmlspecialchars($m['nick']);
    $tx   = htmlspecialchars($m['text']);
    $ti   = htmlspecialchars($m['time']);

    echo "<div class='msg'>";

    echo "<div class='msg-head'>";
    echo "<span class='nick'>$nk</span>";
    echo "<span>IP：$ip</span>";
    echo "<span>•</span>";
    echo "<span>$ti</span>";
    echo "</div>";

    echo "<div class='bubble-main'>$tx</div>";

    echo "<div class='reply-list'>";

    foreach ($m['reply'] as $r) {
        $rip = htmlspecialchars($r['ip']);
        $rtx = htmlspecialchars($r['content']);
        $rti = htmlspecialchars($r['time']);

        echo "<div class='reply'>";
        echo "<div class='reply-meta'>IP：$rip • $rti</div>";
        echo "<div>$rtx</div>";
        echo "</div>";
    }

    echo "<div class='reply-btn' onclick='reply(\"$id\")'>回复</div>";
    echo "</div>";

    echo "</div>";
}
