function Javabuzz () {};

Javabuzz.prototype._isDivisibleBy = function(number, divisor){
	return (number % divisor === 0);
};

Javabuzz.prototype.isDivisibleByThree = function(number){
	// return (number % 3 === 0);
	return this._isDivisibleBy(number, 3);
};

Javabuzz.prototype.isDivisibleByFive = function(number){
	return this._isDivisibleBy(number, 5);
};

Javabuzz.prototype.isDivisibleByFifteen = function(number){
	return this._isDivisibleBy(number, 15);
};

Javabuzz.prototype.says = function(number){
	if(this.isDivisibleByThree(number) 
		&& !this.isDivisibleByFive(number)) return "Java";
	else if(this.isDivisibleByFive(number) 
		&& !this.isDivisibleByFifteen(number)) return "Buzz";
	else if(this.isDivisibleByFifteen(number)) return "Javabuzz";
	else return number
};




/*
	Questions:
	i) what are the different syntax to create an object?
	ii) what are the different syntax to create an object's
		methods i.e other than .prototype
	iii)what are the exact rules governing the behavior of 'this',
	keyword?
*/
