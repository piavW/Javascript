//Exercise #2 number 1. 
//Write a function that returns your first name. Call it.
function name(firstname){
    return firstname
}

name("Pia") //returns my first name. 

//Exercise #2 number 2. 
//Write a new function that takes your name as an input. The function should return your first name, plus your last name, as one string. (Hint: strings can be combined with a +)
function name(fm,em){
    return fm + " " + em;
    }
 name ("Pia", "von Wachenfelt") 
 //returns Pia von Wachenfelt - doesn't ask for input

 function name(firstName) {
    let name = window.prompt("Enter your name: ");
    return(`your name is ${firstName}`);
 }
//the above asks and returns in the browser window. :D
//"Your name is " + name) This is outdated, we now write it (`your name is ${name}`)

//the below asks in the browser window and returns full name in console. :D

function name(firstName){
    let name = window.prompt("Enter your name: ");
    console.log(`your name is ${firstName}`);
 }


// for fun below: 
function holy(holyGrail){
    name = prompt("What is your name?")
    quest = prompt("What is your quest?")
    color = prompt("What is your favourite colour?")
}