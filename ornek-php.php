<?php // AltinAPI - PHP örneği
$ch = curl_init("https://altinapi.hasfiyat.com/api/prices");
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
curl_setopt($ch, CURLOPT_HTTPHEADER, ["Authorization: Bearer API_KEY"]);
$data = json_decode(curl_exec($ch), true);
print_r($data);
