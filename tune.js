function Tune(){

	this.scale = []
	this.key = this.setkey(60)

}

Tune.prototype.tune = function(input){

	var base = 440 * Math.pow(2,(this.key-69)/12)

	var scaleDegree = (input - this.key)%this.scale.length

	console.log("base",base)
	console.log("degree", scaleDegree)
	return base*this.scale[scaleDegree]

}

Tune.prototype.setkey = function(key){
	this.key = key;
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

