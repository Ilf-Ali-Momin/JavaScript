var countries =["Pakistan", "USA", "Sweden"];

var states =new Array("Karachi", "Hyderabad", "lahore");

console.log(states[0]);

//console.log(states.length);
states[0] ="Punjab";
//console.log(states);

var user =["ali", "xyz@abc.com",3,55,true];
//console.log(user);

user.pop()// use to get rid for the value from last
console.log(user);
user.unshift("New Value")//it add the value to array 
//console.log(user);
user.shift();//it get rid of the unshift value which was added to an array
//console.log(user);

console.log(user.indexOf(3));//show the index of an array, but if you ask for other name which is not on array it shows -1

console.log(Array.from("Ali"));