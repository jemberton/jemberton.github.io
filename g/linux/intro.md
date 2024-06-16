# Linux Intro

Welcome to the Linux Intro guide! This guide is intended to aid a new user into the world of using Linux. As there are numerous distributions of Linux available, it should be noted that the target of this guide is intended to be generic. Everything learned here will apply to *most* distributions. In the case of something that might deviate from *most*, it will be noted.

## Understanding Linux

At the risk of diving into some philosophical discussion, let's just start with some basic stuff. Linux is a [kernel](https://en.wikipedia.org/wiki/Kernel) and operating system. It can be used on desktop, laptop, mobile, and embedded devices. If you need a desktop workstation with a graphical interface, no problem. If you want a command line only interface to run a server, it can do that too! Most notably (arguable), is the amount of versatility on embedded devices. Since Linux can be stripped down to operate with only what is *necessary*, it makes a solid choice for limited power applications.

> As the process of installing Linux varies wildly on the target device/hardware/distribution, this guide will assume you have *some* working environment to follow along in. Virtual environments are a great way to learn Linux without committing to a dedicated installation. Whatever environment you have, should be able to be booted to either a command line or GUI where a terminal emulator can be used. We'll talk more about that in just a moment, but you'll likely want to jump right in ... so get that sandbox ready to play!
{.info-icon}

## Command Line Interface (CLI)

The CLI is very powerful interface when one knows how to use it! As this interface is common across Linux, it is the best one to learn without getting into a specific distribution. The CLI is a way of using commands to perform tasks and functions. As opposed to using a mouse with windows/folders/pictures/videos/browsers/etc ...

There are a number of terms that will be referenced from this point on. Let's break those down ...

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

### Common Paths

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
| --- | --- | --- |
| `/` | `C:\` | The main/root operating system |
| `/home` | `C:\Users\` | The userspace root. Each user will have a folder at this path |

### Keyboard Shortcuts
