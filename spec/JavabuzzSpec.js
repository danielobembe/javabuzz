describe('Javabuzz', function() {             //suit
//Note: var within function => declaring a local variable
// if variable created sans var, javascript searches up scope chain
//until it hits uppermost level, @ which .'t would create as global
// variable

	var javabuzz;

	beforeEach(function(){
		javabuzz = new Javabuzz();
	});                 

	describe("knows when a number is", function(){
		it("divisible by 3", function(){         //spec
			expect(javabuzz.isDivisibleByThree(3)).toEqual(true);
		});

		it("divisible by 5", function(){
			expect(javabuzz.isDivisibleByFive(5)).toEqual(true);
		});

		it("divisible by 15", function(){
			expect(javabuzz.isDivisibleByFifteen(15)).toEqual(true);
		}); 
	});

	describe("knows when a number is NOT",function(){
		it("divisible by 3",function(){
			expect(javabuzz.isDivisibleByThree(1)).toEqual(false);
		});

		it("divisible by 5", function(){
			expect(javabuzz.isDivisibleByFive(1)).toEqual(false);
		});

		it("divisible by 15", function(){
			expect(javabuzz.isDivisibleByFifteen(1)).toEqual(false);
		});
	});

	describe("upon having chosen a number:", function(){
		it('says "Java", if divisible by 3', function(){
			expect(javabuzz.says(3)).toEqual("Java");
		}); 
		it('says "Buzz", if divisible by 5', function(){
			expect(javabuzz.says(5)).toEqual("Buzz");
		}); 
		it('says "Javabuzz", if divisible by 15', function(){
			expect(javabuzz.says(15)).toEqual("Javabuzz");
		});
		it('returns number if not divisible by 3, 5, or both', function(){
			expect(javabuzz.says(1)).toEqual(1);
		});  
	}); 
});