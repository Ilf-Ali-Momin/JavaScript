function sayHello(){
  console.log("Hello there, Ali");
}
function sayHello(name){
  console.log("Hello there,", name);
}
function sayHello(name){
  console.log(`Hello there,${name}. How are you?`);
}

//sayHello(); //call a function
//sayHello;   //refer to a function

function hello() {
  return "Hello"
  
}

var greetings = hello();

console.log(greetings);
//or
console.log(hello());