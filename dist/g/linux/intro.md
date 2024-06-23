# Linux Intro

> This page is a work in progress
{.warning-icon}

Welcome to the Linux Intro guide! This guide is intended to aid a new user into the world of using Linux. As there are numerous distributions of Linux available, it should be noted that the target of this guide is intended to be generic. Everything learned here will apply to *most* distributions. In the case of something that might deviate from *most*, it will be noted.

## Understanding Linux

At the risk of diving into some philosophical discussion, let's just start with some basic stuff. Linux is a [kernel](https://en.wikipedia.org/wiki/Kernel) and operating system. It can be used on desktop, laptop, mobile, and embedded devices. If you need a desktop workstation with a graphical interface, no problem. If you want a command line only interface to run a server, it can do that too! Most notably (arguable), is the amount of versatility on embedded devices. Since Linux can be stripped down to operate with only what is *necessary*, it makes a solid choice for limited power applications.

> As the process of installing Linux varies wildly on the target device/hardware/distribution, this guide will assume you have *some* working environment to follow along in. Virtual environments are a great way to learn Linux without committing to a dedicated installation. Whatever environment you have, should be able to be booted to either a command line or GUI where a terminal emulator can be used. We'll talk more about that in just a moment, but you'll likely want to jump right in ... so get that sandbox ready to play!
{.info-icon}

---

## Command Line Interface (CLI)

The CLI is very powerful interface when one knows how to use it! As this interface is common across Linux, it is the best one to learn without getting into a specific distribution. The CLI is a way of using commands to perform tasks and functions. As opposed to using a mouse with windows/folders/pictures/videos/browsers/etc ...

There are a number of terms that will be referenced from this point on. Let's break those down ...

---

## Terms

### Terminal

This *is* the command line interface. Also called [terminal emulator](https://en.wikipedia.org/wiki/Terminal_emulator) on graphical systems. This is where you type commands.

### Shell

The words "terminal" and "shell" are commonly used to mean the same thing, but the shell is the command processing system the terminal uses. Since the terminal *needs* a shell to run in, it is reasonably safe to use "terminal" and "shell" interchangeably. The reason different shells exist can vary, but most aim to offer some sort of performance or feature benefit (extra functionality, customization, compatibility, etc ...) to the user. The most basic commands should work on any shell, so this is less important to dive deep into. The most common shell on Linux systems is [bash](https://www.gnu.org/software/bash/). [Zsh](https://www.zsh.org/) is the default shell for MacOS, but is also widely used on Linux as an alternative to bash.

### The Prompt

Prompts are the actual line where commands are entered. It is completely customisable. Your prompt may be very different from what is shown here, but you should be able to follow along. An example prompt might look like this:

```bash
username@hostname ~:
```

This is pretty straight-forward. The first bit is the currently logged in user's username. Then, the device's hostname or computer name. Then the current working directory `~` is shown.

---

## Common Paths

If you come from a background using Microsoft Windows, the filesystem layout is quite different. 

For example, on Windows, storage for the system is mounted to a drive letter (default `C:`). The system files and userspace files are all on this drive/partition by default. Windows treats that storage device and/or partition as an individual location. The system can be at `C:` and your personal files could be another storage device named `D:`. To access any of the data on either drive, you must address the drive letter first.

By contrast, Linux treats the entire filesystem (even across multiple storage devices) as one big directory. Any additional partitions or storage devices are "mounted" at a "mountpoint" within the filesystem. For example, the Linux filesystem might be mounted at `/` and your personal files at `/home/me`. This method doesn't indicate anything about the physical device that stores any of the files. No drive letters to represent other storage locations. The system at `/` is on storage device 1, and the files at `/home/me` are on storage device 2. So what, big deal?! A benefit of this approach is that references to files, applications, or paths are always relevant even when the physical storage device is different (which would usually mean a drive letter change on a Windows system). If you need more storage and want to migrate all your data to a new hard drive, you could just:

1. temporarily mount a filesystem on the new device
2. copy the contents from the source to the target
3. create a new mountpoint or use the original
4. unmount the original device
5. mount the new device
6. automount the new device upon restarts
7. restart the system (remove old device before if desired)

BOOM! :boom: Done. New bigger drive with all the files you had before and no reason to update shortcuts or references to those files. This also means that even parts of the underlying system could be broken up across many drives. *Nevermind the performance impact from inter-device communication latency* ... :smile:

About those common paths ... the table below shows common system paths. These locations are usually intended to not be modified directly by the user. We can call them "reserved" or "system" paths.

| Linux Path | Windows Path | Description |
| :--- | :--- | :--- |
| `/` | `C:\` | The main/root operating system |
| `/home` | `C:\Users\` | The userspace root. Each user will have a folder at this path |
| `/opt` | `C:\Users\USERNAME\AppData\` | User application directory or optional software path |
| `/usr/bin` | `C:\Windows\System32` | System global binaries and drivers |

These paths are not direct translations of the Windows filesystem, but rather a close approximation. Software on a Linux filesystem can run from just about anywhere as long as the permissions are set to allow it. We'll dive into permissions a bit later.

---

## Keyboard Shortcuts

A Linux system with a GUI absolutely allows for conventional mouse control. When a GUI is not available, keyboard proficiency is an absolute must. There are various command line based shortcuts that can be immensely helpful.

| Shortcut | Description |
| :--- | :--- |
| [[CTRL]]+[[L]] | Clears the terminal/console/shell |
| [[CTRL]]+[[A]] | Goto beginning of prompt |
| [[CTRL]]+[[E]] | Goto end of prompt |
| [[CTRL]]+[[U]] | Clear prompt from end. Also puts line into clipboard buffer |
| [[CTRL]]+[[K]] | Clear prompt from beginning. Also puts line into clipboard buffer |
| [[CTRL]]+[[Y]] | "Yanks" buffer (paste) |
| [[CTRL]]+[[C]] | Stops execution of currently running script/program |
| [[&uarr;]] | If history is enabled, goto previous command |
| [[&darr;]] | If history is enabled, goto next command |
| [[TAB]] | Autocomplete path or command (see next section) |

There are a few other commands for more intricate editing or program control, but these will be the most commonly used shortcuts.

---

## Autocompletion

Autocompletion on the command line is another useful tool. Not all platforms support the fullest functionality of autocompletion, but most do support *some* level. The autocomplete feature can finish path names, file name, commands, and other options. Let's consider a practical example.

You need to change to a new path, one that is long, and you don't want to type out the full path everytime.

```bash
/home/myuser/Documents/Some_Project/Phase_1/data/001
```

Rather than type all of that out, we could use autocomplete to assist.

1. Type `/h` + [[TAB]]
2. This autocompletes to `/home`
3. Type `/m` + [[TAB]]
4. Now we see `/home/myuser`
5. Continue with the first letter of each folder followed by the [[TAB]] key.

> Autocomplete may need more than just the first letter of each folder if there are more than one folders starting with the given criteria. For example, if `/home/` contains two users named `me` and `myaltuser`, your initial criteria for autocomplete will need to be two or more letters. To get autocomplete to resolve `myaltuser`, type `my`+[[TAB]] to complete.
{.info-icon}

You may notice if you press [[TAB]] more than once, you see a preview of all possible matches for your autocomplete. (If you don't see this, don't worry. Your distribution or device may have this disabled or not installed to conserve space on a power limited system.) The preview can sometimes help when you may not know the full path but have an idea of the parent path.

I strongly urge you to abuse this feature if you have it available. It can mean the difference in measurable time when navigating the filesystem and performing tasks.

---

## Users and Groups

Linux has users and groups (not unlike any other OS). Users are what you'd expect them to be, an individual user account. Linux can have users (you and me), system users (for processes, applications, and hardware access), and virtual or remote users. For most systems, you'll be interested in the "regular" users and the administrator "root". The administrator user has full permissions to *everything* on the filesystem. On most systems, you will have to temporarily elevate to "root" to perform certain tasks. We'll get into that later, but know that it is not advised to use a system as root unless you understand the implications. This mechanism is for safety against you and malicious software. It isn't full-proof, but it is quite effective.

Users can be added to multiple groups. The groups serve to cover a broader level of access that can be shared by many users. For example, if you and another user both need read and write access to shared files on the system, but you are owner of those files. You and the other user can be added to the group and the permissions be set to allow read and write access to the file for the onwer and the group, but no access for anyone else.

---

## Permissions

Files, folders, and programs all use the same permission system in Linux. File permissions are represented by a permissions mask with information about who can read, write, and execute.

Examples of Permissions

```plaintext
rwxrwxrwx
rwxr--r--
777 or 0777
700 or 0700
```

These may look a bit odd, but they make sense once you break it down. They represent read, write, and execute permissions for the owner user, group, and other.

The first example would be a file where all users have full permissions. The second example is a file where everyone can read the file, but only the owner of the file can write or execute.

The numeric mask (also called `chmod` or `octal`) is another way to represent the same permissions.

| Permission | Letter | Number |
| :--- | :--- | :--- |
| Read | r | 4 |
| Write | w | 2 |
| Execute | x | 1 |

The numbers are a sum of the permissions. In the examples above, we see two numeric/octal masks. The first one `777` or `0777` would be equivalent to all permissions on a file or directory. The first 7 is the owner, followed by the group, and finally, all other users. How did we get 7? That is `read (4) + write (2) + execute (1) = 7`. The second numeric example gives the owner full access, but no access to the group or other users. So a mask like `644` or `0644` would give the owner read and write, the group read only, and all other users read only access. The zero at the front of those numeric masks is for special permissions. We won't get into those here, that's for another day.

There are a couple of ways to set permissions using the `chmod` command. You'll learn about those on the [Basic Commands](/guides/linux/basic-commands){.router} page.

---

## Hidden Files

Files on a Linux system do *not* require an extension. So sometimes it can be difficult to distinguish what is a file and what is a folder. Hidden files or folders are easily identified by the name. To make a file or folder hidden, add a `.` at the beginning the of the name. For example:

```plaintext
my_passwords.txt
.my_passwords.txt
```

> You may notice in the examples, we have file extensions. Linux does not *require* them, but can absolutely use them.
{.info-icon}

The first filename is not hidden, the second is. Hiding a file does *not* change the permissions, so you'll need to be sure to set those properly. Hidden files are usually intended to be used for holding your configs or "system" files. It is not a good practice to think of this as a security mechanism (so my example is intentionally misleading :stuck_out_tongue_winking_eye:). You might have environment variables or settings in a file that you don't necessarily want to see when listing the contents of a folder. Marking a file as hidden will keep those files from appearing in most common listings of directory contents unless a "show all" flag is given.

---

> WIP from here below
{.warning-icon}

## Paths

### Absolute

### Relative

---

Still with me?! Now that you're properly informed, let's actually *do* something! Head over to the [Basic Commands](/guides/linux/basic-commands){.router-next} page to learn more!
