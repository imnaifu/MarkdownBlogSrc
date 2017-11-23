- **git init**: create .git/  
- **git clone**: 
    - get from remote
    - ssh, https ... many protocal supported
- **git add** != svn add
    - The git add command adds a change in the working directory to the staging area. It tells Git that you want to include updates to a particular file in the next commit. 
    - **The git add command should not be confused with svn add, which adds a file to the repository.** Instead, git add works on the more abstract level of changes. This means that **git add needs to be called every time you alter a file**, whereas **svn add only needs to be called once for each file**. It may sound redundant, but this workflow makes it much easier to keep a project organized.

- **git commit** != svn commit
    - `git commit -m 'message here'`
    - commit to your working area
    - The git commit command commits the staged snapshot to the project history.
    - While they share the same name, this command is nothing like svn commit. Snapshots are committed to the local repository, and this requires absolutely no interaction with other Git repositories.

- **git push** = svn commit 
    - push to public

- **git status** = svn status
    - The git status command displays the state of the working directory and the staging area. It lets you see which changes have been staged, which haven’t, and which files aren’t being tracked by Git.
    - 3 tpye of files
        - untracked files
        - not staged
        - to be committed
    
- **git log** = svn log
    - check commit history
    
- **git checkout**
    - switch branches
    - git checkout works hand-in-hand with git branch. When you want to start a new feature, you create a branch with git branch, then check it out with git checkout. You can work on multiple features in a single repository by switching between them with git checkout.
- **git branch**
    - create braches

- git revert 
- **git reset** 
    - can be used to unstage the staging file
    - reset the commit can delete that commit (dangerous)
- git clean
    - The git clean command removes untracked files from your working directory.
- **git remote**
    - 为了便于管理，Git要求每个远程主机都必须指定一个主机名
    - mange remote git server
    - `git remote -v`: check remote server
- git fetch
    - fetch from remote repository but bot merge
    - actually, `git pull` = `git fetch` & `git merge`

- **git pull** = svn udpate:
    - `git pull origin master` 
    - pull repository to your working area
- git diff ~= svn diff




