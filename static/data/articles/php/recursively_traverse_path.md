~~~php
<?php

/*
* - naifu
* recursively retrieve file path
* @input: root dir
* @return: array of dir and files
* key => (dir_name or file_name)
* value => array (dir)
* value => 1 (file) 	
*/
function recursive_get_path($dir){
	
	$arr = array();
	if (is_dir($dir)){
		$ls = scandir($dir);
	}
	if (isset($ls)){
		foreach ($ls as $val){
			if ($val == '.' || $val == '..'){continue;}
			else{
				$new_dir = $dir.'/'.$val;
				$arr[$val] = recursive_get_path($new_dir);
			}
		}
		return $arr;
	}
	else{return 1;}
}

$dir = 'D:\xunlei';
$r = recursive_get_path($dir);
print_r($r);
~~~
