# Basic Commands

> This page is a work in progress
{.warning-icon}

There are numerous commands every aspiring Linux nerd should know. These commands are absolutely essential to *using* the system. First, we need to talk about *how* to use them.

## Man Pages

Most distributions have a "man page" for commands. This is a manual page. You can simply type `man` followed by the command and the system will give you a very detailed documentation of the usage and options for that command. Of course, not everything will be in the database, but most of the "baked in" system commands will be. Most man pages are available in an online format too, but having them local to the system in use can be very helpful. These days, when everyone has an internet capable device in their pocket, the online versions have become more popular.

The other plus side of a local man page is the relevance to *your* version of any command. I mean to say, what version is on your system. Some base system commands change over time and/or may have limited functionality on an embedded system. Options and syntax can vary between versions, so an online version of a man page might not be *exactly* like what your system is capable of doing.

Wanna give it a shot? If you have a terminal open, type:

```plaintext
man ls
```

The man page for the `ls` command will display in the terminal. Most man page viewers have a help page that can be accessed by pressing [[h]]. You can navigate up and down using the arrow keys and can close the man page by pressing [[q]].

---

## Options

Most commands have a variety of options and/or parameters/arguments that can be entered at the execution of the command. This can point to files or folders, configs, or set options that would otherwise be considered default or undefined. There are usually two ways to enter the options, long and short. Short options are usually single letter options with/out parameters. They are sort of shorthand options. Long options are just that, a more verbose way of writing the same options as the short method. Various commands have the "most common" options defined with a short option, and the lesser used ones as long options *only*. Some commands have a long *and* short version of the same option. Sounds like chaos?! It isn't really bad at all, but it does usually mean that you'll have to memorize some of the ones you'll want to use often. The plus side is, there is almost always a "help" option that can be passed to a command to shed some light on usage and options. Isn't that what the man page is for? Yes ... it is. The help option is great when there is no man page for the command you are using. Besides, it's nice to have multiple methods to get information and help!

An example of getting help for a command would look like this (for the `ls` command):

```plaintext
ls --help
```

This gives an output like this on my machine (truncated):

```plaintext
Usage: ls [OPTION]... [FILE]...
List information about the FILEs (the current directory by default).
Sort entries alphabetically if none of -cftuvSUX nor --sort is specified.

Mandatory arguments to long options are mandatory for short options too.
  -a, --all                  do not ignore entries starting with .
  -A, --almost-all           do not list implied . and ..
      --author               with -l, print the author of each file
  -b, --escape               print C-style escapes for nongraphic characters
      --block-size=SIZE      with -l, scale sizes by SIZE when printing them;
                             e.g., '--block-size=M'; see SIZE format below

  -B, --ignore-backups       do not list implied entries ending with ~
  -c                         with -lt: sort by, and show, ctime (time of last
                             change of file status information);
                             with -l: show ctime and sort by name;
                             otherwise: sort by ctime, newest first
...
```

Those single letter options are short options. The others being long options. Most of the ones shown in the truncated output of the help for the `ls` command are boolean options. They require no additional arguments. The `--block-size=SIZE` option (with no short verison) is a long option that has an argument that is mandatory. A practical example using long and short options is shown below:

```plaintext
ls -a --block-size=M /some/path
```

Notice the path at the end? That isn't an option but *is* part of the syntax for the command (which is outlined in the first line of the command's help). Short options with arguments are usually seperated with a space rather than an `=` sign like the long option. So, let's pretend the `--block-size=SIZE` long option used `-b` for short. The same example above would look like this:

```plaintext
ls -a -b M /some/path
```

Short options can be a bit cryptic for new users (and veterans!) causing confusion from command to command. An option of `-r` may not be the same thing for multiple commands. Long options can be easier to read when working with an unfamiliar command. It is a matter of preference (unless no other option is available).

---

> From this point on, we will be talking about numerous topics, throwing around a bunch of terms and commands, and generally taking a direction that can get confusing. By all means, if you feel confident enough to navigate through on your own ... have at it! Otherwise, a guided "tutorial" style set of actions will be highlighted in this fashion. These blocks are meant to serve as a way to keep this learning experience focused. If you see one of these blocks, do the thing. Everything else is just a talking point by intention. We may do other actions outside of these blocks, but they are generally read-only actions and can be performed anywhere.
{.action-icon}

---

## Navigating the Filesystem

One of the most basic operations on the CLI is listing the contents of a directory. It is helpful to see the contents of a folder in order to know what paths are available to change into.

### Listing Contents

We have already touched on the `ls` command up above, but let's dive into it a bit. With your terminal open, type:

```plaintext
ls
```

This will list the contents of the directory. The output is shown in a row. There are no properties, no indication of file vs folder, and no hidden files shown. If you prefer to see details, try an argument. Let's list the contents of the same path in "long" format.

```plaintext
ls -l
```

The `-l` argument/option will list the same contents as before, but now with permissions, ownership, size (in bytes), date, and the path name. If you want to see hidden files, the `-a` option can be added. While we're here, let's turn that file size into a human readable format (kb, mb, etc ...)

```plaintext
ls -lah
```

Now, we see *all* files and the filesize is a bit easier to read! That is all well and good, but what if we want to list the contents of a path that isn't the current working folder?

```plaintext
ls -lah /some/path/here
```

Remember the primer on [absolute and relative paths?](/guides/linux/intro#paths){.router} We can use either here (if no path is given, the current path is implied). This can be utilized to check the contents without having to navigate to that folder first. In the last example, we will list the contents to the parent folder to the current path.

```plaintext
ls -lah ../
```

Pretty easy, eh? Some systems have aliases (a sort of shortcut) that combine the options/arguments into the command name. For example, the command `ll` is equivalent to `ls -l` with support for additional arguments to be chained in like normal. My system did *not* have this alias by default, so I created it to reflect `ls -lah` when I type `ll` as to make it a bit faster in my everyday usage.

### Changing Directory

Now that we know how to list the contents of the directory, how do we change the current working directory? Easy! We use `cd` to change directories.

```plaintext
cd /some/path
cd ../
cd ./some/sub/folder/to/current
```

This command is one of a few that is as straight-forward as possible. No arguments, no options. Relative and absolute paths are both supported. Auto-completion is useful when navigating to long paths. If a path's permissions do not allow you to read, you may not be able to change into that directory. An error will be displayed after attempting to change paths.

### Making a Directory

Creating new directories is pretty simple. If you have write access to the path, you can create new empty folders there. There aren't a bunch of options available for this command, but unlike the `cd` command, there *are some* that can be useful. Let's take a look at some examples:

```plaintext
mkdir some_folder
mkdir -p ./some_folder/another_folder/and_one_more
mkdir -pv ./some_folder/another_folder/and_one_more
mkdir -m 0777 ./some_folder
```

There is a bit to unpack here. The first example is the simplest form. A new folder is created in the current working path. No fuss. The second example utilizes the `-p` option, which creates parents of the target folder `and_one_more`. If any one of the folders in the path do not exist, it will be created until the full path exists. The third example is exactly like the second, except, the verbose `-v` option is set. It will verbosely list each folder created. Finally, the last example also sets the `chmod` style permissions while creating the path.

> Since we are finally starting to do more than just read and view, let's continue the exercises by creating a playground directory for everything beyond this section. Create a new folder in your home directory and change into it.<br>
    `mkdir ~/learning-linux`
    `cd ~/learning-linux`
{.action-icon}

---

## Files & Folders

Files and folders have a number of likenesses. Linux considers everything a file! A directory could be thought of as a file containing an index of files and folders insdie of it. The interface of the filesystem recognizes this index and displays it in such a way that is easier for humans to understand. It isn't an *actual* folder on the disk. More like a map or set of instructions. Anyway, most filesystem commands will be able to be performed on files and folders interchangeably.

### Touch

The `touch` command can create new files of any type. The real use and intention is to update the access and modification times of each file to the current time. If you touch a file that doesn't exist, the timestamps of the file are updated and thus a file of 0 bytes is created. If you touch an existing file, the times are updated. There are a handful or more options for this command, so be sure to check the `--help` or man page. Touching a file is easy:

```plaintext
touch my_file.txt
touch ./some/folder/my_file.txt
```

> With your terminal open to the playground path, we can create a quick file using `touch test_file.txt`. This file doesn't have anything in it, but it exists. If you list the contents of the directory, you'll see the file. If you're using the long listing option `-l`, you'll see it at 0 bytes. A little bit later, we will learn how to edit this file with actual text and content. For now, this will be good enough to run through some other commands.
{.action-icon}

### Copy

Copying files and directories is pretty similar, but not all options are applicable to both. The recursive option `-r` or `-R` only apply to directories. We can copy by uisng the `cp` command. This is the first command we've run into that has more than a handful of options and usage syntaxes. I highly recommend reading the `--help` and man page.

```plaintext
cp source_file.txt dest_file.txt
cp ./some/folder/source.txt ./dest.txt
cp -R ./some/folder ./other/folder
```

The basic syntax is `cp [OPTION] SOURCE DEST` for both files and folders. In the first example above, we are making a copy of `source_file.txt` in the current working directory and naming it `dest_file.txt`. The second example, a file named `source.txt` is being copied from some subfolder and copied to the current working directory (we could have left off the `./` before *both* paths). The last example copies a folder recursively (so itself and all files within the folder) to a different relative path. The `cp` command **does** copy hidden files when using the recursive option.

> Copy the test file to the same path it is in and name the file `test_file2.txt` (or anything you'd like, but this guide will use the noted filename)<br>
    `cp test_file.txt test_file2.txt`
{.action-icon}

### Move

Moving files is a very similar syntax to copying. The `mv` command is used to move a file from the source to the destination. The difference between move and copy is pretty obvious, but the options of the move command are identical to copy with the exception of the `-r` or `-R` recursive option.

```plaintext
mv source_file.txt dest_file.txt
mv ./some/folder/source.txt ./dest.txt
mv ./some/folder ./other/folder
```

### Rename

There is no command for renaming files. Instead, we use the move command to rename. Afterall, renaming a file is just changing the path ... even if it is in the same directory. Look at the first example in the move command block above. It is essentially renaming the file.

> Rename the original test file to include a "1" in the filename like the copy.<br>
    `mv test_file.txt test_file1.txt`
{.action-icon}

### Remove

The remove command `rm` is as one would expect with what knowledge we have of the other commands so far. It has the recursive option for directories (mandatory for directories). It simply removes a file or folder.

> This is ***not*** recycle! This is a very irreversible and permenant operation. I repeat: your removed files and folders are gone forever!<br>
    One remove command to memorize as **BAD**{.text-red}, is `rm -Rf /` or `sudo rm -Rf /` as this removes the root of the filesytem by force and recursively. That means ... everything on your hard disk is gone!
{.warning-icon}

```plaintext
rm my_file.txt
rm -R ./some/folder
```

> Delete the copy of the test file.<br>
    `rm test_file2.txt`
{.action-icon}

---

## Setting Permissions

We talked about [permissions](/guides/linux/intro#permissions){.router} in the introduction. So, let's actually put that information into use. Setting permissions is done using the `chmod` command. Any form of the permissions (so, `chmod` numeric style or `umask` letter style) can be used with the command.

```plaintext
chmod 0777 my_file.txt
chmod a+rwx my_file.txt
chmod -R g+rw ./some/folder
chmod og-rwx my_file.txt
```

Those certainly are a bit cryptic! The first example sets the permissions `0777` which represents `owner(user)/group/other` and `read/write/execute` on that text file. The second example uses the `umask` method and sets `all` plus the `read/write/execute` permissions on that text file, the same as the first example. The third example targets a directory and recursively sets permissions using the `umask` method to `group` plus `read/write` access. If those permission were already active, nothing happens. The last example uses the `umask` method and removes `read/write/execute` access from `other/group` on that text file. Note the minus `-` to show that those permissions should be removed. The `og` portion could have also been `go` and the same goes for the `rwx` portion. Those can be in *any* order.

```plaintext
chmod o-rwx,g-wx my_file.txt
chmod 0740 my_file.txt
```

This one combines multiple different permission masks for the different tiers of access. The example removes all access for `other` users and `write/execute` from the `group` users. Assuming the base permission were already at full access for everyone (`a+rwx` or `0777`), the second example above are identical in function.

> Whichever form is easiest for you to use is perfectly fine. Once upon a time, I was more partial to the `chmod` style of permissions, but these days, I prefer the `umask` style as it is quicker to read. At least, when sharing scripts and commands with people less familiar with the math involved with the `chmod` numeric representation.
{.info-icon}

---

## Printing a text File

> WIP
{.warning}

---

## Editing Text

Editing text files on the command line is where things start to take off :rocket: a bit. Your system may have all of the text editors, it may have one, it might even have none! If you don't know what your system has, it is reasonably safe to assume `vi` exists on your system. You can check for any of the editors by typing their name and pressing [[ENTER]] on your keyboard. Just keep in mind, these editors usually "take over" the terminal and can be confusing to get out of. See each editor's section below for more information.

### STDOUT echo

The first method to enter text into a file is to direct the output of the `echo` command. The `echo` command prints the text after the command.

```plaintext
echo Hello, world!
```

That output can be redirected to a file instead or in addition to the `stdout` or standard output of the console. The example above just prints the text to the console. In order to redirect the output to a file and not to the `stdout` of the console, use this:

```plaintext
echo Hello, world! > my_file.txt
```

This puts the literal "Hello, world!" into a file called `my_file.txt` as the whole contents of the file. The operator `>` denotes truncating the file to 0 bytes, then writing the defined text. If you use `>>`, then the file will be appended to rather than overwritten. If the file did not exist before this command is executed, it will be created as long as the user has write permission to the current working directory.

> Let's write some text to our test file.<br>
    `echo Hello, world! > test_file1.txt`
{.action-icon}

### nano

The text editor `nano` is arguably the easiest command line based text editor for new users. The learning curve is quite simple compared to the `vi` or `vim` editors. If you type the `nano` command with no parameters, it opens the editor with no context to a filename. If you give it a path, it will create a file and open the editor.

```plaintext
nano
nano my_file.txt
```

The `nano` editor will look something like this:

![nano text editor](/img/linux-basic_commands-001.png "nano")

Notice the cursor in the "buffer" and the controls/shortcuts at the bottom. The shortcut `^X` stands for [[CTRL]] + [[X]] to close the file. If anything has been typed into the buffer, you'll be met with mandatory options of saving the file. The options are `Y` to save the file which will be accompanied by a prompt to specify the filename, `N` to close without saving, and `^C` to cancel.

This isn't meant to be a full blown guide for `nano` ... that [exists elsewhere](https://www.nano-editor.org/) on the interwebs.

### vi or vim

The popular `vi` or `vim` (which are not the same thing, but close in most ways) is a powerful text editor with an extremely minimal design. It can be used like `nano` in the way of just opening the editor or specifying a file.

```plaintext
vi
vi my_file.txt
vim
vim my_file.txt
```

> Wait ... which one should I use?
{.question-icon}

Use `vim` or `Vi IMproved` if you have it. Promise, it'll be a happier situation. Embedded systems usually have only `vi` as their editor since they are usually deployed on limited resource systems. Versions like `nvim` or `neovim` exist too, but I'll refrain from getting into all the implementations and plugins and the like. If you open the editor, it'll be similar to this:

![vim text editor](/img/linux-basic_commands-002.png "Customized vim")

This is a screenshot of *my* `vim` ... so it has some plugins/add-ons applied. Yours will be less colorful and just a bit different ... but similar.

> WIP
{.warning}

---{#booknav}

[Introduction](/guides/linux/intro){.router-prev}
