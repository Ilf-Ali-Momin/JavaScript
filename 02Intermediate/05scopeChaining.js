var name = "Ali";
console.log("Line number 2", name);

function sayName() {
  var name ="Mr A";
  console.log("Line number 6",name);
  

  function sayNameTwo() {
    console.log("Line number 10", name)
    
    
  }
}


sayName();
// you can ask anything but note you can ask just from above functions not lower
