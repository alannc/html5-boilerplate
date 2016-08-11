<?php

	$ch = curl_init("https://httpbin.org/get");

	curl_setopt($ch, CURLOPT_HEADER, 0);

	$result = curl_exec($ch);
	curl_close($ch);
	print_r($result);
?>
