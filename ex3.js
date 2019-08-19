//exercise 3, number 1: What is this in the example below?
// Does it have an equivalent in Ruby?
function Person(first, last) { 
    // create "constructor"
    this.first = first;        
    // public variables -- reference current object
    this.last = last;

    let privateFn = function(first, last){  
    // private function
    }

    this.setName = function(first, last){ 
        // public function
        this.first = first;
        this.last = last;
    }
}
//this is the same af Rubys Self. Gives you a scope (räckvidd, område) of the this it's connected to. Often objects, functions and classes. 
// this is an object which's value is decided based on how the code is being executed.
