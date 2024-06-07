# Linux Intro

Welcome to the Linux Intro guide! This guide is intended to aid a new user into the world of using Linux. As there are numerous distributions of Linux available, it should be noted that the target of this guide is intended to be generic. Everything learned here will apply to *most* distributions. In the case of something that might deviate from *most*, it will be noted.

## Understanding Linux

At the risk of diving into some philosophical discussion, let's just start with some basic stuff. Linux is a [kernel](https://en.wikipedia.org/wiki/Kernel) and operating system. It can be used on desktop, laptop, mobile, and embedded devices. If you need a desktop workstation with a graphical interface, no problem. If you want a command line only interface to run a server, it can do that too! Most notably (arguable), is the amount of versatility on embedded devices. Since Linux can be stripped down to operate with only what is *necessary*, it makes a solid choice for limited power applications.

>{info} As the process of installing Linux varies wildly on the target device/hardware/distribution, this guide will assume you have *some* working environment to follow along in. Virtual environments are a great way to learn Linux without committing to a dedicated installation. Whatever environment you have, should be able to be booted to either a command line or GUI where a terminal emulator can be used. We'll talk more about that in just a moment, but you'll likely want to jump right in ... so get that sandbox ready to play!

## Command Line Interface (CLI)

The CLI is very powerful interface when one knows how to use it! As this interface is common across Linux, it is the best one to learn without getting into a specific distribution. The CLI is a way of using commands to perform tasks and functions. As opposed to using a mouse with windows/folders/pictures/videos/browsers/etc ...

There are a number of terms that will be referenced from this point on. Let's break those down ...

### Terminal

This *is* the command line interface. Also called [terminal emulator](https://en.wikipedia.org/wiki/Terminal_emulator) on graphical systems. This is where you type commands.

### Shell

The words "terminal" and "shell" are commonly used to mean the same thing, but the shell is the command processing system the terminal uses. Since the terminal *needs* a shell to run in, it is reasonably safe to use "terminal" and "shell" interchangeably. The reason different shells exist can vary, but most aim to offer some sort of performance or feature benefit (extra functionality, customization, compatibility, etc ...) to the user. The most basic commands should work on any shell, so this is less important to dive deep into. The most common shell on Linux systems is [bash](https://www.gnu.org/software/bash/). [Zsh](https://www.zsh.org/) is the default shell for MacOS, but is also widely used on Linux as an alternative to bash.

### The Prompt

Prompts are the actual line where commands are entered. It is completely customisable. Your prompt may be very different from what is shown here, but you should be able to follow along. An example prompt might look like this:

`username@hostname ~: `

This is pretty straight-forward. The first bit is the currently logged in user's username. Then, the device's hostname or computer name. Then the current working directory `~` is shown. This symbol, `~`, represents the user's "home" directory.


### Common Paths

### Keyboard Shortcuts
