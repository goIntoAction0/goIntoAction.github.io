---
description: 'git'

# prev: true
# next: true
---
# git：开源的分布式版本控制系统
::: tip 内容主要来自于：
[菜鸟 - Git教程]()
:::
更多 git log 命令可查看：
[http://git-scm.com/docs/git-log](http://git-scm.com/docs/git-log)

Git 完整命令手册地址：[http://git-scm.com/docs](http://git-scm.com/docs)
## 一、Git 命令
几乎每一种版本控制系统都以某种形式支持分支。使用分支意味着你可以从开发主线上分离开来，然后在不影响主线的同时继续工作。

有人把 Git 的分支模型称为**必杀技特性**，而正是因为它，将 Git 从**版本控制系统**家族里区分出来。
### 1. Git 基础命令
![git仓库示意图](/assets/img/git_storehouse.png)
#### 说明：
- `workspace`：工作区
- `staging area`：暂存区/缓存区
- `local repository`：版本库或本地仓库
- `remote repository`：远程仓库


#### 常用命令1
|命令|说明|
|:---|---|
|`git init`	|**初始化仓库**|
|`git init <file>`|指定该目录，作为git仓库。ps：文件名不需要加引号。|
|`git add 文件名`	<br>`git add .`|**添加**文件到仓库，可以用 git add 要告诉 Git 文件冲突已经解决|
|`git commit -m 备注`	|**提交暂存区**到本地仓库。<br>ps:备注需要加引号。|
|`git push`|上传远程代码并**合并**|
|`git status`	|**查看仓库当前的状态**，显示有变更的文件。|
|`git clone <file1> <file2>`|	**拷贝**一份远程仓库，也就是下载一个项目。<br>文件1：是被拷贝的文件地址。<br>文件2：拷贝到本地文件地址。|
|`git pull`|**下载远程代码**并合并|

#### 常用命令2
|命令|说明|
|:---:|---|
|`git mv`	|**移动或重命名**工作区文件。|
|`git diff`	|**比较**文件的不同，即暂存区和工作区的差异。|
|`git reset`	|回退版本。|
|`git rm`	|**删除**工作区文件。|
|`git log`	|查看**历史提交记录**|
|`git blame <file>`|以列表形式查看指定文件的历史修改记录|
|`git remote`|远程仓库操作|
|`git fetch`|从远程获取代码库|


### 2. Git 分支管理
|命令|说明|
|:---:|---|
|`git branch`|列出分支|
|`git branch 新分支名称`|创建新分支|
|`git checkout 分支名称`|切换分支|
|`git merge ` |1. 合并分支<br>2. 可以多次合并到统一分支， 也可以选择在合并之后直接删除被并入的分支。|
|`git checkout -b 分支名称`|创建新分支并立即切换到该分支下|
|`git branch -d 分支名称`|删除分支|


### 3. Git 查看提交历史
Git 提交历史一般常用两个命令：
- `git log` - 查看历史提交记录。
- `git blame <file>` - 以列表形式查看指定文件的历史修改记录。



更多 git log 命令可查看：
[http://git-scm.com/docs/git-log](http://git-scm.com/docs/git-log)


#### git blame
要查看**指定文件**的修改记录可以使用 git blame 命令，格式如下：
```sh
git blame <file> # git blame 命令是以列表形式显示修改记录.
```
<br><br>


|命令|说明|
|:---:|---|
|`git log`|查看历史提交记录。|
|`git log --oneline`|查看历史记录的**简洁**的版本。|
|`git log <file>`|以列表形式查看指定文件的历史修改记录。|
|`git log  --graph `|查看历史中什么时候出现了**分支、合并**。|
|`git log --reverse`|**逆向**显示所有日志。|
|`git log --author`|查找**指定用户**的提交日志。|
|`git blame <file>`|查找**指定文件**的修改记录。|
|`git log  --no-merges `|隐藏合并|
|--since 和 --before，但是你也可以用 --until 和 --after。|指定日期|


#### 指定日期：
如果你要**指定日期**，可以执行几个选项：--since 和 --before，但是你也可以用 --until 和 --after。

例如，如果我要看 Git 项目中三周前且在四月十八日之后的所有提交，我可以执行这个（我还用了 --no-merges 选项以隐藏合并提交）：
```sh{1}
$ git log --oneline --before={3.weeks.ago} --after={2010-04-18} --no-merges
5469e2d Git 1.7.1-rc2
d43427d Documentation/remote-helpers: Fix typos and improve language
272a36b Fixup: Second argument may be any arbitrary string
b6c8d2d Documentation/remote-helpers: Add invocation section
5ce4f4e Documentation/urls: Rewrite to accomodate transport::address
00b84e9 Documentation/remote-helpers: Rewrite description
03aa87e Documentation: Describe other situations where -z affects git diff
77bc694 rebase-interactive: silence warning when no commits rewritten
636db2c t3301: add tests to use --format="%N"
```



### 4. Git 标签
|命令|说明|
|:---:|---|
|`git tag -a 版本号`|达到一个重要的阶段，并希望永远**记住这个特别的提交快照**。|
|`git tag -a v0.9(版本号) 85fc7e7`|忘了给某个提交打标签，又将它发布了，我们可以给它追加标签。|
|`git tag`|查看所有标签|
|`git tag -a <tagname> -m "runoob.com标签"`|指定标签信息命令|
|`git tag -s <tagname> -m "runoob.com标签"`|PGP签名标签命令|

**情况一：** 如果你达到一个重要的阶段，并希望永远**记住那个特别的提交快照**，你可以使用 `git tag` 给它打上标签。

比如说，我们想为我们的 runoob 项目发布一个"1.0"版本。 我们可以用 `git tag -a v1.0` 命令给最新一次提交打上（HEAD）"v1.0"的标签。

`-a` 选项意为"创建一个带注解的标签"。 不用 `-a` 选项也可以执行的，但它不会记录这标签是啥时候打的，谁打的，也不会让你添加个标签的注解。 推荐一直创建带注解的标签。
```sh
$ git tag -a v1.0 
```


**情况二：** 当你执行`git tag -a` 命令时，Git 会打开你的编辑器，让你写一句标签注解，就像你给提交写注解一样。
现在，注意当我们执行 `git log --decorate` 时，我们可以看到我们的标签了：
```sh
*   d5e9fc2 (HEAD -> master) Merge branch 'change_site'
|\  
| * 7774248 (change_site) changed the runoob.php
* | c68142b 修改代码
|/  
* c1501a2 removed test.txt、add runoob.php
* 3e92c19 add test.txt
* 3b58100 第一次版本提交
```

**情况三：** 如果我们忘了给某个提交打标签，又将它发布了，我们可以给它追加标签。

例如，假设我们发布了提交 85fc7e7(上面实例最后一行)，但是那时候忘了给它打标签。 我们现在也可以：
```sh
$ git tag -a v0.9 85fc7e7
$ git log --oneline --decorate --graph
*   d5e9fc2 (HEAD -> master) Merge branch 'change_site'
|\  
| * 7774248 (change_site) changed the runoob.php
* | c68142b 修改代码
|/  
* c1501a2 removed test.txt、add runoob.php
* 3e92c19 add test.txt
* 3b58100 (tag: v0.9) 第一次版本提交
```

如果我们要查看所有标签可以使用以下命令：
```sh
$ git tag
v0.9
v1.0
```
指定标签信息命令：
```sh
git tag -a <tagname> -m "runoob.com标签"
PGP签名标签命令：
git tag -s <tagname> -m "runoob.com标签"
```










## 二、Git 快速使用
### 1. 安装 Git
在使用Git前我们需要先安装 Git。Git 目前支持 Linux/Unix、Solaris、Mac和 Windows 平台上运行。

Git 各平台安装包下载地址为：[http://git-scm.com/downloads](http://git-scm.com/downloads)

#### Mac 平台上安装
在 Mac 平台上安装 Git 最容易的当属使用图形化的 Git 安装工具，下载地址为：

[http://sourceforge.net/projects/git-osx-installer/](http://sourceforge.net/projects/git-osx-installer/)


#### Windows 平台上安装
在 Windows 平台上安装 Git 同样轻松，有个叫做 msysGit 的项目提供了安装包，可以到 GitHub 的页面上下载 exe 安装文件并运行：
安装包下载地址：[https://gitforwindows.org/](https://gitforwindows.org/)

官网慢，可以用国内的镜像：[https://npm.taobao.org/mirrors/git-for-windows/](https://npm.taobao.org/mirrors/git-for-windows/)。

完成安装之后，就可以使用命令行的 git 工具（已经自带了 ssh 客户端）了，另外还有一个图形界面的 Git 项目管理工具。

在开始菜单里找到"Git"->"Git Bash"，会弹出 Git 命令窗口，你可以在该窗口进行 Git 操作。

### 2. Git 配置 `git config`
Git 提供了一个叫做 `git config` 的工具，专门用来**配置或读取**相应的**工作环境变量**。

这些环境变量，决定了 Git 在各个环节的具体工作方式和行为。这些变量可以存放在以下三个不同的地方：
- `/etc/gitconfig`文件：系统中对**所有用户**都普遍适用的配置。若使用 `git config` 时用 `--system` 选项，读写的就是这个文件。
- `~/.gitconfig` 文件：用户目录下的配置文件**只适用于该用户**。若使用 `git config` 时用 `--global` 选项，读写的就是这个文件。
- 当前项目的 Git 目录中的配置文件（也就是工作目录中的 `.git/config` 文件）：这里的**配置仅仅针对当前项目有效**。每一个级别的配置都会**覆盖上层的相同配置**，所以 `.git/config` 里的配置**会覆盖**`/etc/gitconfig`中的同名变量。

|命令|说明|
|:---:|---|
|`git config`|用来**配置或读取**相应的**工作环境变量**。|
|`git config --system`|读写`/etc/gitconfig`文件（系统中对**所有用户**都普遍适用的配置。）。|
|`git config --global`|读写`~/.gitconfig`文件（用户目录下的配置文件，**只适用于该用户**）。|
|`git config --list`|检查已有的配置信息|
|`git config 环境变量名`|可以直接查阅某个环境变量的设定，只要把特定的名字跟在后面即可。<br>环境变量名有：user.name、user.email等等|



在 Windows 系统上，Git 会找寻用户主目录下的 `.gitconfig` 文件。主目录即 `$HOME` 变量指定的目录，一般都是 `C:\Documents and Settings\$USER`。

此外，Git 还会尝试找寻 `/etc/gitconfig` 文件，只不过看当初 Git 装在什么目录，就以此作为根目录来定位。


#### 1. 配置Git的用户信息

配置个人的用户名称和电子邮件地址：
```sh
$ git config --global user.name "runoob"
$ git config --global user.email test@runoob.com
```
如果用` --global`选项，那么更改的配置文件就是位于你用户主目录下的那个，以后你所有的项目都会默认使用这里配置的用户信息。

如果要在某个特定的项目中使用其他名字或者电邮，只要去掉`--global`选项重新配置即可，新的设定保存在当前项目的`.git/config`文件里。

#### 2. 设置Git的文本编辑器
设置Git默认使用的文本编辑器, 一般可能会是 Vi 或者 Vim。如果你有其他偏好，比如 Emacs 的话，可以重新设置：:
```sh
$ git config --global core.editor emacs
```

#### 3. 差异分析工具
还有一个比较常用的是，在解决合并冲突时使用哪种差异分析工具。比如要改用 vimdiff 的话：
```sh
$ git config --global merge.tool vimdiff
```
Git 可以理解 kdiff3，tkdiff，meld，xxdiff，emerge，vimdiff，gvimdiff，ecmerge，和 opendiff 等合并工具的输出信息。

当然，你也可以指定使用自己开发的工具，具体怎么做可以参阅第七章。

#### 4. 查看配置信息
要检查已有的配置信息，可以使用`git config --list`命令：
```sh
$ git config --list
http.postbuffer=2M
user.name=runoob
user.email=test@runoob.com
```
有时候会看到重复的变量名，那就说明它们来自不同的配置文件（比如`/etc/gitconfig`和`~/.gitconfig`），不过最终 Git 实际采用的是最后一个。
这些配置我们也可以在`~/.gitconfig`或`/etc/gitconfig`看到，如下所示：
```sh
vim ~/.gitconfig 
```
显示内容如下所示：
```sh
[http]
    postBuffer = 2M
[user]
    name = runoob
    email = test@runoob.com
```
也可以直接**查阅某个环境变量**的设定，只要把特定的名字跟在后面即可，像这样：
```sh
$ git config user.name
runoob
```


### 3. Git 创建仓库
#### git init
Git 使用 `git init` 命令来初始化一个Git仓库，Git的很多命令都需要在Git的仓库中运行，**所以`git init`是使用Git的第一个命令。**

在执行完成 `git init` 命令后，Git 仓库会生成一个 `.git` 目录，该目录包含了资源的所有元数据，其他的项目目录保持不变。
#### 使用方法
使用当前目录作为Git仓库，我们只需使它初始化。
```sh
git init   # 该命令执行完后会在当前目录生成一个 .git 目录。
```

使用我们指定目录作为Git仓库。
```sh
git init newrepo
```
初始化后，会在 newrepo 目录下会出现一个名为 `.git` 的目录，所有 Git 需要的数据和资源都存放在这个目录中。

如果当前目录下有几个文件想要纳入版本控制，需要先用 `git add` 命令告诉 Git 开始对这些文件进行跟踪，然后提交：
```sh
$ git add *.c
$ git add README
$ git commit -m '初始化项目版本'
```
以上命令将目录下以 `.c` 结尾及 README 文件提交到仓库中。

:::tip 注意：
1. 在 Linux 系统中，`commit`信息使用单引号`'`，Windows 系统，`commit`信息使用双引号`"`。
2. 所以在 `git bash` 中 `git commit -m '提交说明'` 这样是可以的，在 Windows 命令行中就要使用双引号 `git commit -m "提交说明"`。
:::


### 4. Github



### 5. Gitee




### 6. Git 服务器搭建



### Git 与 SVN 区别
Git 不仅仅是个**版本控制系统**，它也是个**内容管理系统(CMS)**，**工作管理系统**等。

如果你是一个具有使用 SVN 背景的人，你需要做一定的思想转换，来适应 Git 提供的一些概念和特征。

Git 与 SVN 区别点：
>1. Git 是分布式的，SVN 不是：这是 Git 和其它非分布式的版本控制系统，例如 SVN，CVS 等，最核心的区别。
>2. Git 把内容按元数据方式存储，而 SVN 是按文件：所有的资源控制系统都是把文件的元信息隐藏在一个类似 .svn、.cvs 等的文件夹里。
>3. Git 分支和 SVN 的分支不同：分支在 SVN 中一点都不特别，其实它就是版本库中的另外一个目录。
>4. Git 没有一个全局的版本号，而 SVN 有：目前为止这是跟 SVN 相比 Git 缺少的最大的一个特征。
>5. Git 的内容完整性要优于 SVN：Git 的内容存储使用的是 SHA-1 哈希算法。这能确保代码内容的完整性，确保在遇到磁盘故障和网络问题时降低对版本库的破坏。

### 介绍 Git 的工作流程。
一般工作流程如下：
- 克隆 Git 资源作为工作目录。
- 在克隆的资源上添加或修改文件。
- 如果其他人修改了，你可以更新资源。
- 在提交前查看修改。
- 提交修改。
- 在修改完成后，如果发现错误，可以撤回提交并再次修改并提交。

下图展示了 Git 的工作流程：

<img src="/assets/img/git_work.png" width=70%>


### Git 工作区、暂存区和版本库
#### 基本概念
我们先来理解下 Git 工作区、暂存区和版本库概念：
- **工作区**：就是你在电脑里能看到的目录。
- **暂存区**：英文叫 stage 或 index。一般存放在 .git 目录下的 index 文件（.git/index）中，所以我们把暂存区有时也叫作索引（index）。
- **版本库**：工作区有一个隐藏目录 .git，这个不算工作区，而是 Git 的版本库。

下面这个图展示了工作区、版本库中的暂存区和版本库之间的关系：

<img src="/assets/img/git_work2.png">

- 图中左侧为工作区，右侧为版本库。在版本库中标记为 "index" 的区域是暂存区（stage/index），标记为 "master" 的是 master 分支所代表的目录树。
- 图中我们可以看出此时 "HEAD" 实际是指向 master 分支的一个"游标"。所以图示的命令中出现 HEAD 的地方可以用 master 来替换。
- 图中的 objects 标识的区域为 Git 的对象库，实际位于 `".git/objects"` 目录下，里面包含了创建的各种对象及内容。
- 当对工作区修改（或新增）的文件执行 `git add` 命令时，暂存区的目录树被更新，同时工作区修改（或新增）的文件内容被写入到对象库中的一个新的对象中，而该对象的ID被记录在暂存区的文件索引中。
- 当执行提交操作（git commit）时，暂存区的目录树写到版本库（对象库）中，master 分支会做相应的更新。即 `master` 指向的目录树就是提交时暂存区的目录树。
- 当执行 `git reset HEAD` 命令时，暂存区的目录树会被重写，被 `master 分支`指向的目录树所替换，但是工作区不受影响。
- 当执行 `git rm --cached <file>` 命令时，会直接从暂存区删除文件，工作区则不做出改变。
- 当执行 `git checkout .` 或者 `git checkout -- <file>` 命令时，会用暂存区全部或指定的文件替换工作区的文件。这个操作很危险，会清除工作区中未添加到暂存区中的改动。
- 当执行 `git checkout HEAD . `或者 `git checkout HEAD <file>` 命令时，会用 HEAD 指向的 master 分支中的全部或者部分文件替换暂存区和以及工作区中的文件。这个命令也是极具危险性的，因为不但会清除工作区中未提交的改动，也会清除暂存区中未提交的改动。