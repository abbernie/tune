function Tune(){

	this.scale = []
	this.key = 60
	this.mode = {
		output: "frequency",
		input: "MIDI"
	}
	this.etmajor = [ 261.62558,
		293.664764,
		329.627563,
		349.228241,
		391.995422,
		440,
		493.883301,
		523.25116
	]
	this.middleC = 60;
	this.rootFreq = 440 * Math.pow(2,(60-69)/12);
	console.log("{{{{ Tune.js v0.1 Loaded }}}}");

}

Tune.prototype.note = function(input){

	var newvalue;

	if (this.mode.output == "frequency") { 
		newvalue = this.frequency(input)
	} else if (this.mode.output == "ratio") { 
		newvalue = this.ratio(input)
	} else if (this.mode.output == "MIDI") { 
		newvalue = this.MIDI(input)
	} else {
		newvalue = this.frequency(input)
	}
	
	return newvalue;

}

Tune.prototype.frequency = function(input) {

	var base = 440 * Math.pow(2,(this.key-69)/12)
	
	// what octave is our input
	var octave = Math.floor((input-this.key)/this.scale.length)
	
	// which scale degree (0 - scale length) is our input
	var scaleDegree = (input - this.key)

	scaleDegree =  (scaleDegree+this.scale.length*5) % this.scale.length
	
	var freq = base*this.scale[scaleDegree]
	
	freq = freq*(Math.pow(2,octave))
	
	freq = Math.floor(freq*100000000000)/100000000000
	
	return freq

}

Tune.prototype.ratio = function(input) {

	// what octave is our input
	var octave = Math.floor((input-this.key)/this.scale.length)

	// which scale degree (0 - scale length) is our input
	var scaleDegree = (input - this.key)
	scaleDegree = ( scaleDegree+this.scale.length*5 ) % this.scale.length

	// what ratio is our input to our key
	var ratio = Math.pow(2,octave)*this.scale[scaleDegree]

	ratio = Math.floor(ratio*100000000000)/100000000000

	return ratio

}

Tune.prototype.MIDI = function(input) {

	var newvalue = this.frequency(input);

	var n = 69 + 12*Math.log(newvalue/440)/Math.log(2)
	
	n = Math.floor(n*1000000000)/1000000000

	return n

}

Tune.prototype.setKey = function(key){
	this.key = key
	return this.key
}

Tune.prototype.loadScale = function(name){
	var freqs = TuningList[name].frequencies
	this.scale = []
	for (var i=0;i<freqs.length-1;i++) {
		this.scale.push(freqs[i]/freqs[0])
	}
	console.log(" ");
	console.log("LOADED "+name);
	console.log(TuningList[name].description);
	console.log(this.scale);
	// VIS
	// this scale vis
	var vis = [];
	for (var i=0;i<100;i++) {
		vis[i] = " ";
	}
	for (var i=0;i<this.scale.length;i++) {
		var spot = Math.round(this.scale[i] * 100 - 100);
		if (i<10) {
			vis.splice(spot,1,i+1);
		} else {
			vis.splice(spot,5,i+1);
		}
	}
	var textvis = "";
	for (var i=0;i<vis.length;i++) {
		textvis += vis[i];
	}
	console.log(name)
	console.log(textvis)
	// ET scale vis
	var vis = [];
	for (var i=0;i<100;i++) {
		vis[i] = " ";
	}
	for (var i=0;i<this.etmajor.length;i++) {
		var spot = Math.round(this.etmajor[i]/this.etmajor[0] * 100 - 100);
		if (i<10) {
			vis.splice(spot,1,i+1);
		} else {
			vis.splice(spot,5,i+1);
		}
		
	}
	var textvis = "";
	for (var i=0;i<vis.length;i++) {
		textvis += vis[i];
	}
	console.log(textvis)
	console.log("equal-tempered major (reference)")

}

Tune.prototype.search = function(letters) {
	var possible = []
	for (var key in TuningList) {
		if (key.toLowerCase().indexOf(letters.toLowerCase())!=-1) {
			possible.push(key)
		}
	}
	return possible
}

Tune.prototype.chord = function(midis) {
	var output = []
	for (var i=0;i<midis.length;i++) {
		output.push(this.note(midis[i]))
	}
	return output;
}

Tune.prototype.root = function(newmidi, newfreq) {
	this.middleC = newmidi
	this.rootFreq = newfreq
	// not working now ... needs much work.
	// setKey is not transposing now, either.
}
