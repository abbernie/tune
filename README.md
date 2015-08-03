# TuneJS

**Authors:** Andrew Bernstein & Ben Taylor

**Overview:** Tune.js is a web audio tuning library of microtonal and just intonation scales.

Tune.js supports over 3,000 historical tunings and temperaments, ported from Microtuner TIDoc files [compiled and documented by Victor Cerullo from 2003-2010](http://www.venetica.net/Sites/16tone/mtx_file_specs.htm).

[List of Tunings](http://abbernie.github.io/tune/scales.html)

[Demo](http://abbernie.github.io/tune/demo.html)

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

Load your scale of choice with the ```loadScale('scale-name') ``` method.

```js
tune.loadScale('mean19');
```

Pass MIDI note numbers to the ```note() ``` method. ```note(midi-note-#) ``` outputs the corresponding pitch in Hertz. You can use ```note() ``` to set the frequency of an oscillator.

```js
osc.frequency.value = tune.note(60);
```

### Controls

You can set the key and base frquency of a scale with the ```setKey(midi-note-#) ``` method.

```js
//sets the base frequency to G4 or 392Hz
tune.setKey(67);
```

### Example Tunings

| Name | Description |
|------|-------------|
| ji_12 | Basic JI with 7-limit tritone |
| harm30 | First 30 harmonics and subharmonics |
| pyth_31 | 31-tone Pythagorean scale |
| ptolemy | Intense Diatonic Syntonon, also Zarlino's scale |
| couperin | Couperin modified meantone |
| helmholtz_pure | Helmholtz's two-keyboard harmonium tuning untempered |
| partch_43 | Harry Partch's 43-tone pure scale |
| johnston_81 | Johnston 81-note 5-limit scale of Sonata for Microtonal Piano |
| xenakis_chrom | Xenakis's Byzantine Liturgical mode, 5 + 19 + 6 parts |
| slendro | Observed Javanese Slendro scale, Helmholtz/Ellis p. 518, nr.94 |
| harrison_5 | From Lou Harrison, a pelog style pentatonic |
| malkauns | Mode of Indian Raga Malkauns, inverse of prime_5 |

![BigP](http://www.mathopenref.com/images/bioimages/pythagoras1.jpg)
![BigZ](https://upload.wikimedia.org/wikipedia/commons/thumb/2/22/Gioseffo_Zarlino.jpg/200px-Gioseffo_Zarlino.jpg)
![Partch](http://www.pas.org/images/default-source/hall-of-fame-photos/hpartch.jpg?sfvrsn=0)
