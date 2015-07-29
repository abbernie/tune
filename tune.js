function Tune(){

	this.scale = [1/1,11/10,5/4,4/3,3/2,5/3,7/4,2/1]
	this.key = 60;

}

Tune.prototype.retune = function(input){
2
	var base = 440 * Math.pow(2,(this.key-69)/12)

	var scaleDegree = (input - this.key)%this.scale.length

	console.log("base",base)
	console.log("degree", scaleDegree)
	return base*this.scale[scaleDegree]

}

