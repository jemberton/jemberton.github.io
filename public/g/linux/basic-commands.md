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

Remember the primer on [absolute and relative paths](/guides/linux/intro#paths){.router}? We can use either here. This can be utilized to check the contents without having to navigate to that folder first.

### Changing Directory

### Making a Directory

---

## Files & Folders

### Copy

### Move

### Rename

### Remove

---

## Editing Text

---{#booknav}

[Introduction](/guides/linux/intro){.router-prev}
