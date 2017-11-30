<?php

$a = 1;
function func(){
	$b = 2;
	echo $a
	$c = function (){
		$d = 3;
		echo $b;
	};
	$c();
}

func();