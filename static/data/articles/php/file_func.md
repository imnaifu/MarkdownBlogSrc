# PHP file functions
- **fopen**($file_name, $open_mode): open a file as a file_handler.
- **fclose**($file_handler): close a file.

---
- **feof**($file_handler): return $true if is the end of file, $false if not.
- **fread**($file_handler, $file_length): return $string if success, else false.
- **fgets**($file_handler): return $string for one line.
- **fgetc**($file_handler): return $string of one character.
- **fwrite**($file_handler, $content_string): return $int of number of bytes written.

---
- **is_file**($file_path): return true if exist and is a regular file.
- **file_exist**($file_path): return true if file or directory exists. 

---
- **filesize**($file_path): return $int in bytes.
- **tempnam**($string_dir, $string_prefix): create file with unique file name in the directory, return full path.
- **tmpfile**(void): create a temporary file with a unique name in read-write(w+) mode and returns file handler.

---
- **unlink**($file_path): delete file, return true if success, else false.
- **rmdir**($directory_path): remove the directory (directory must be empty).

---
- **copy**($source_path, $destination_path): return true if copy success, else false.
- **readfile**($file_path): Outputs a file, return the number of bytes read from the file.
- **mkdir**($path_name): makes directory.
- **scandir(dir)**: return array of files and dirs inside input dir

---
- **basename**($file_path): return the base name of the given path.

~~~
    echo "1) ".basename("/etc/sudoers.d", ".d").PHP_EOL;
    echo "2) ".basename("/etc/sudoers.d").PHP_EOL;
    echo "3) ".basename("/etc/passwd").PHP_EOL;
    echo "4) ".basename("/etc/").PHP_EOL;
    echo "5) ".basename(".").PHP_EOL;
    echo "6) ".basename("/");
    ?>
    The above example will output:
    1) sudoers2) sudoers.d3) passwd4) etc5) .6) 
    
~~~
