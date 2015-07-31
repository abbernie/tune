# TuneJS

**Authors:** Andrew Bernstein & Ben Taylor

**Overview:** Tune.js is a web audio tuning library of microtonal and just intonation scales.

Tune.js supports over 3,500 historical tunings and temperaments, ported from Microtuner TIDoc files [compiled and documented by Victor Cerullo from 2003-2010](http://www.venetica.net/Sites/16tone/mtx_file_specs.htm)

### How to Use Tune.js

Download tune.js and include it in a script tag at the top of your page.

```html
<head>
	<script src="tune.js"></script>
</head>
```

Create a Tune.js instance.

```js
var tune = new Tune();
```

Load your scale of choice with the ```loadscale('scale-name') ``` method.

```js
tune.loadscale('mean19');
```

Pass MIDI note numbers to the ```note() ``` method. ```note(midi-note-#) ``` outputs the corresponding pitch in Hertz. You can use ```note() ``` to set the frequency of an oscillator.

```js
osc.frequency.value = tune.note(60);
```

### Controls

You can set the key and base frquency of a scale with the ```setkey(midi-note-#) ``` method.

```js
//sets the base frequency to G4 or 392Hz
tune.setkey(67);
```


### Demo

[Tune.js Demo](http://abbernie.github.io/tune)

##### Endnote

![BigP](http://www.mathopenref.com/images/bioimages/pythagoras1.jpg)
![BigZ](https://upload.wikimedia.org/wikipedia/commons/thumb/2/22/Gioseffo_Zarlino.jpg/200px-Gioseffo_Zarlino.jpg)
![Partch](http://www.pas.org/images/default-source/hall-of-fame-photos/hpartch.jpg?sfvrsn=0)
