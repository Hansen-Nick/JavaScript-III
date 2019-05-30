/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Window binding: when used globally, this is binded to window, which is basically just the javascript language its self.
* 2. Implicit binding: when method is called with a dot, the object before the dot is 'this'
* 3. New binding: for when new object is being made with contructor. This is the new object being created.
* 4. Explicit binding: using .call, .bind, or .apply, the object passed in is the new this
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding

console.log(this)

// Principle 2

// code example for Implicit Binding

const randoObj = {
    hello: 'Hello',
    randomethod: function(info) {
        console.log(this.hello, info) 
    }
}

randoObj.randomethod('yooo')

// Principle 3

// code example for New Binding

function BestGame(game) {
    this.greaterThan = 'is better than';
    this.game = game;
    this.whichIsBetter = function() {
        console.log(`${this.game} ${this.greaterThan} any other`);
        console.log(this);
    }
}

const division = new BestGame('Division');
const destiny = new BestGame('Destiny')
division.whichIsBetter();

// Principle 4

// code example for Explicit Binding
division.whichIsBetter.call(destiny);
