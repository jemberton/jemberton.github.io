# Remote Access

> This page is a work in progress
{.warning-icon}

Remote access is a common way to interface with Linux. It does not matter if the remote system is a server, desktop, embedded device, or anything else. If the remote system has SSH enabled and you have valid credentials, you can log into a remote shell. So what?! This allows for full remote control of all services, files, and use of the system from anywhere. Think about the need to control a server that runs your website or database. You'd be able to log in, modify the configuration, edit the database and/or source files, add a new user to the system, start/stop an FTP server, and log back out. All resources can be made available in the remote session.

In the case of embeddded devices or small computing modules (like a Raspberry Pi), you could potentially have access to all connected hardware including the GPIO. This is more useful as the remote device may be right next to you in the physical world, but has no direct input device. If it wirelessly available, you can SSH into the device and control it using your laptop, desktop, or phone.

Any system with SSH enabled has two perspectives, server and client. Neither require the other (on a single system) to exist or function. The client is the application or service that connects you to another machine. The server instance is the application or service that allows other machines to connect to you. We will briefly cover the server-side setup and application(s). If your sandbox environment is remote already, you might only be interested in the client section.

---

## Client

The client software for any OS does not have any special requirements for the sake of compatibility. Any of these solutions *should* work with whatever remote system you are trying to connect to. There are, on occasion, some applications or servers that require additional authentication methods that may/not be supported in your client. It is less common and you'll likely know well ahead of time that a "special" client is needed.

### Windows

Windows has many client applications available. A veteran in the game is [PuTTy](https://www.chiark.greenend.org.uk/~sgtatham/putty/). One of the newer methods is using an instance of WSL or Windows Subsystem for Linux. This is, a minimal instance of Linux running in parallel underneath the Windows system. This is *my* preferred method. At the end of the day, the remote system contains most if not all of the functionality for the session, so it really doesn't matter which one you pick.

#### PuTTy

[PuTTy](https://www.chiark.greenend.org.uk/~sgtatham/putty/) is more than *just* an SSH client. It can also connect to serial and telnet devices. It has almost every feature one could want in an SSH client, including logging. This can be useful to save the output of a running application to a file on *your* local system rather than having to retrieve the file remotely. Best of all, it is free!

#### WSL

Windows Subsystem for Linux is a great way to interface with a remote Linux system. It can also be a good sandbox environment to learn Linux while still in a Windows session.

### MacOS

### Linux

### Android

### iOS

---

## Server

### OpenSSH

---{#booknav}

[Basic Commands](/guides/linux/basic-commands){.router-prev}
