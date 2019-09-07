+++
title = "Helen Wheels"
description = "A talking typewriter"
date = "2019-02-27"
+++

This project started off with the idea of creating a chatbot that speaks through a typewriter. I've not got round to making the chatbot part yet, but I probably will in the future. The major hurdle of course was making the typing work.

Here it is booting up:

<video width="50%" controls>
  <source src="/images/helen-wheels/working.mp4" type="video/mp4">
  Your browser does not support the video tag.
</video>

### Concept

The typewriter I got uses matrix polling to determine what keys to type.

This means that it has two 8 bit buses - a scan bus and a return bus. Each line of the scan bus is "probed" several times a second. The other circuitry in the typewriter then detects what active scan line(s) are grounded through which return line(s). Essentially, each character you can type corresponds with a combination of lines shorted together.

### Circuitry

So in able to simulate these lines being shorted together, I opted to created 2 "arrays" of N-channel MOSFETs, with their drains and sources commoned together.

<img src="/images/helen-wheels/mosfet-configuration.png" />

This meant I could control the current flow between whatever scan and return lines I wanted. To bias ("turn on") the MOSFETs, I used two 74HC595N shift registers. I fed the shift registers the data via a Raspberry Pi Zero

<img src="/images/helen-wheels/circuitry.jpg" />

<small>Note: the resistors are to pulldown any floating grounds</small>

On the typewriter's board, I desoldered the edge connector that the original keyboard slotted into and repaced it with standard 0.1" male dupont connectors. Then I tapped the rectified side of the main input diode bridge and used a 5v buck converter to power the RPi and the shift registers.

<img src="/images/helen-wheels/typewriter-board.jpg" />

Here is all the circuitry put together.

<img src="/images/helen-wheels/in-case.jpg" />

### Code

I took the membrane out of the keyboard and took photos of each side, as well as the keyboard layout itself. I then put these images into photoshop and traced out what combination of lines corresponded with what keys. From this I created a [keymap](https://github.com/honeypieio/helen-wheels/blob/master/type/keymap.py).

For example the character "o" has the following lines active on the scan and return buses respectively (represented as two bytes):

00001000
00000100

I then wrote the program that utilises this data.

It iterates through each character in the string to be typed and finds the corresponding bytes from the keymap, then shifts them out to both registers.

I found the optimum keying delay was 0.05 seconds, which is pretty fast!

[Here's the source code if you're interested](https://github.com/honeypieio/helen-wheels).

<hr />

Here it is at full speed typing out a test sentence:

<video width="50%" controls>
  <source src="/images/helen-wheels/over-and-over.mp4" type="video/mp4">
  Your browser does not support the video tag.
</video>

### Now What?

I have a few ideas on how to use this.
As mentioned before a chatbot is one possibility. That would involve installing a microphone, which can be complicated with a Raspberry Pi as it only has digital inputs...

Another idea would be using a machine learning corpus to make it automatically type out stupid, made-up poems or movie scripts

Essentially anything that prints to the screen can co-opt the program I've written to type its output on the typewriter rather than a console or a file.
