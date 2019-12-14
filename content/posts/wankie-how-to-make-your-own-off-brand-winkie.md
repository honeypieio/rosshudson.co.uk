+++
date = 2019-11-21T00:00:00Z
description = "PCB layouts and instructions for making your very own off-brand Winkie."
draft = true
title = "Wankie: How To Make Your Own Off-Brand Winkie"
type = "post"

+++
On [Ep. 114 of Cheapshow](https://www.thecheapshow.co.uk/ep-114-winkie), Paul and Eli found a bizarre French single promoting a failed electronic pin badge called Winkie. It sounds incredibly dull, but it's really not - I've since become obsessed with it.

As it turns out they're quite pricey and rare, so I decided to make my own off-brand version dubbed Wankie:

![](/images/finished-product.jpg)

If you would like to make your own Wankie you're in luck (if you can etch your own circuit boards).

### Circuit Board

To make the circuit board, you'll need a double sided piece of laminate, at least 50x50mm.

The link below is a PDF with the layout to scale for an A4 page.

[PCB Layout](https://drive.google.com/file/d/1G-mmLmWoUyeC-S6W-NTwl_hBmtrIUGoF/view?usp=sharing "PCB Layout")

I won't go into detail how to etch boards at home but here's a few tips for photo-etching a double sided board:

* To make sure both sides are aligned properly, leave a leader of about 25mm at the top and bottom of both transparencies. Line both transparencies up whilst holding them flat and taut, then sellotape or staple **each** leader together.

<img of transparency>

* Cut off a small corner of your transparencies and the laminate. This means you can be sure you're exposing it the the same way round on each side, it can be easy to lose track of orientation when flipping the board over and peeling off the protective film.

### Materials

It's a bit unorthodox but it is made out of widely-available, standard parts. Here's a list of what you need:

[Bill of Materials](https://docs.google.com/spreadsheets/d/1p3rOqLWnDMtnXX7NXCRcTw4L4Kr5cC3prt3LqJf37A0/edit?usp=sharing "Bill of Materials")

### Instructions

Since it's a bit weird and not so obvious from the layout, I'll go through each step of construction (I'll assume you have a blank PCB ready to go). 

1. Apply some PCB varnish to the front - it'll make it last longer. Clear nail varnish is the same thing. 
2. Solder the largest pads for the negative cell contacts and the pin back.

![](/images/soldering-1.jpg)

3. Solder the 0 ohm link and the capacitor. If you're using a soldering iron, to make them sit flush to the board you can tin the pads then use some solder wick to make the pad flat. Tack one lead on and solder other lead then reflow the first led again.

![](/images/soldering-2.jpg)

4. Prepare the resistors by cropping each lead to about 4mm. Then solder them to the board.

![](/images/cropped resistor.jpg)

![](/images/soldering-3.jpg)

5. Solder the 555 timer. Tin the pads then tack two diagonal pins then reflow all eight pins.

  
  
![](/images/soldering-4.jpg)  
6\. Prepare the cell holders' pads by tinning them and using solder wick to make them flat.

![](/images/soldering-5.jpg)

7. Form the cell holders' leads by gently bending them perpendicular to the body with a pair of small pliers/blunt snips. Crop off the excess. Surface mount versions do exist but I couldn't find them - use them if you can!

![](/images/cell-holder-folded.jpg)  
8\. Position the cell holder centred with a pair of pliers and flow **lots** of solder on each lead. They'll be under a lot of mechanical strain when the cells are in them!

![](/images/soldering-6.jpg)  
9\. To make the pin back, crop one of them to about 4mm then tin the flat side of each. Hold them flush together and place your iron on the cropped side. A hot iron will make this much easier!

![](/images/pin-back-assembly.jpg)  
10\. Using a pair of pliers to hold the pin back, reflow the central pad and place the pin back in the centre.

![](/images/soldering-7.jpg)

11. Form the switch's leads by bending them perpendicular tot he body with a pair of pliers/blunt snips

![](/images/dip-switch-bend.jpg)  
12\. Position the switch then tack one end and reflow both sides with a generous amount of solder to make a strong mechanical bond. A dab of super glue on the right side of the switch will also help with this.

13. Solder the LEDs. Make sure they're flush on front facing side. It should now work!

![](/images/soldering-8.jpg)

14. Prepare the tabs by cutting the __ from your transparency sheet and cutting four small rectangles of aluminium foil onto a paper towel. The foil bits don't need to be exact - you can crop the edges later with a pair of scissors.   
    Make a small pool of superglue on the paper towel, then drag the end of each __ through the glue and place it on top of a piece of foil. It should pick it up.

![](/images/tabs.jpg)

15. Attach the __ by placing them into position (where the foil touches the two corner contacts on each side as shown). Then place a bead of superglue in the middle of the __.

![](/images/final-circuit-side.jpg)

You have made your very own Wankie!

If you have any questions or have any issues, please get in touch. 