+++
date = 2019-11-21T00:00:00Z
description = "PCB layouts and instructions for making your very own off-brand Winkie."
draft = true
title = "Wankie: How To Make Your Own Off-Brand Winkie"
type = "post"

+++
On [Ep. 114 of Cheapshow](https://www.thecheapshow.co.uk/ep-114-winkie), Paul and Eli found a bizzare French single promoting a failed electronic pin badge called Winkie. It sounds incredibly dull, but it's really not - I've since become obsessed with it.

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

I'll assume you have a blank PCB ready to go.

First off, I apply some PCB varnish to the front - it'll make it last longer. You can use clear nail varnish instead.

Next I solder the large pads for the negative battery contact and the pin back.

![](/images/soldering-1.jpg)

Then solder the capacitor and 0Ω link. To solder the component flush to the board, tin the pads then use some solder braid to make the pad flat. Then tin your iron and tack one side of the component on and reflow each side.

![](/images/soldering-2.jpg)

To solder the through hole resistors, crop each lead leaving around 4mm left.

![](/images/cropped resistor.jpg)![](/images/soldering-3.jpg)

Solder the 555 timer by tinning the pads and tacking on two diagonal leads and then reflow all eight.  
  
![](/images/soldering-4.jpg)  
Prepare the cell holders' pads by tinning them and using solder wick to make them flat

![](/images/soldering-5.jpg)

Form the leads of the cell holders by bending their leads perpendicular to its side and cropping off prefolded ends.

![](/images/cell-holder-folded.jpg)  
Position the cell holder centred with a pair of pliers and flow lots of solder on each lead. Mechanical strain

![](/images/soldering-6.jpg)  
To make the pin back, crop one of them to about 4mm then tin the flat side of each. Hold them flush together and place your iron on the cropped side. A hot iron will make this much easier!

![](/images/pin-back-assembly.jpg)  
Using a pair of pliers to hold the pin back, reflow the central pad and place the pin back in the centre.

![](/images/soldering-7.jpg)

To form the switch, bend its leads perpendicular with a pair of piers/blunt snips

![](/images/dip-switch-bend.jpg)  
Position the switch then tack one end and reflow both sides with a generous amount of solder to make a strong mechanical bond. A dab of super glue on the right side of the switch will also help with this.

![](/images/soldering-8.jpg)![](/images/tabs.jpg)![](/images/final-circuit-side.jpg)