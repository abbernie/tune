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

Create a Tune.js instance, specifying the Audio Context as a creation argument.

```js
var tune = new Tune(audioContext);
```

Load your scale of choice with the ```js loadscale('scale-name') ``` method.

```js
tune.loadscale('mean19');
```

Pass MIDI note numbers to the ```js tune() ``` method. ```js tune(midi-note-#) ``` outputs the corresponding pitch in Hertz. You can use ```js tune() ``` to set the frequency of an oscillator.

```js
osc.frequency.value = tune.tune(60);
```

### Controls

You can set the key and base frquency of a scale with the ```js setkey(midi-note-#) ``` method.

```js
//sets the base frequency to G4 or 392Hz
tune.setkey(67);
```


### Demo

[Tune.js Demo](http://abbernie.github.io/tune)
