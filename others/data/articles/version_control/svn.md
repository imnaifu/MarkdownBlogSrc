# Basic SVN commands
1. **svn add:** add local file to the svn server, only appear in the repository after commit
2. **svn delete:** after commit, this will delete both the local working copy and remote repository
3. **svn status:** show the status, mostly use with -u 
4. **svn update:** this will syncs local with server
5. **svn commit:** will commit changed files, added files, and deleted files
6. **svn diff:** show difference between local copy and server copy
    - `svn diff -r 4302:4304 filename.php` will show difference by the version number
    - `svn diff -r 4302 filename.php` will show difference between the local copy and sepcific version
7. **svn move:** move a file from one directory to another or rename a file 
    - the file will be moved on the local immediately and the repositroy after commit
    - `svn move SRC DEST` 
    - `svn rename SRC DEST`
8. **svn checkout:** used to pull a SVN tree from the server. It's a one time procedure
9. **svn log [file_name]**: used to get commit history
