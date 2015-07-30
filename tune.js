function Tune(){

	this.scale = []
	this.key = this.setkey(60)
	console.log(this.key)

}

Tune.prototype.tune = function(input){
	
	console.log("KEY!",this.key)
	var base = 440 * Math.pow(2,(this.key-69)/12)

	var scaleDegree = (input - this.key)%this.scale.length
	
	if(scaleDegree < 0){
		scaleDegree = scaleDegree * -1
	}

	console.log("base",base)
	console.log("degree", scaleDegree)

	var pitch = base*this.scale[scaleDegree]
	
	var octave = Math.floor((input-this.key)/this.scale.length)

	pitch = pitch*(Math.pow(2,octave))

	return pitch

}

Tune.prototype.setkey = function(key){
	this.key = key
	return this.key
}

Tune.prototype.loadscale = function(name){
	this.scale = []
	var letter = name.split("")[0].toUpperCase()

			$.get("tunings/"+letter+"/"+name+".mtx",function(d) {
				var text = d.split("\n")
				var freqs = []
				
				for (var i = 0; i < text.length; i++ ) {
					if (text[i] == parseFloat(text[i])) {
						freqs.push(parseFloat(text[i]));
						this.scale.push(freqs[freqs.length-1]/freqs[0])
					}
				}
				this.tune(60)
				console.log(this.scale)
			}.bind(this))
}

