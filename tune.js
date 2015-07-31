function Tune(){

	this.scale = []
	this.key = this.setkey(60)
	this.mode = {
		output: "frequency",
		input: "MIDI"
	};

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

	var scaleDegree = (input - this.key)%this.scale.length

	var octave = Math.floor((input-this.key)/this.scale.length)

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
	scaleDegree = ( scaleDegree + 160 ) % this.scale.length

	// what ratio is our input to our key
	var ratio = Math.pow(2,octave)*this.scale[scaleDegree]

	ratio = Math.floor(ratio*100000000000)/100000000000

	return ratio

}

Tune.prototype.MIDI = function(input) {

	var newvalue = this.frequency(input);

	var n = 69 + 12*Math.log(newvalue/440)/Math.log(2)

	return n

}

Tune.prototype.setkey = function(key){
	this.key = key
	return this.key
}

Tune.prototype.loadscale = function(name){
	var freqs = TuningList[name].frequencies
	this.scale = []
	for (var i=0;i<freqs.length;i++) {
		this.scale.push(freqs[i]/freqs[0])
	}
}
