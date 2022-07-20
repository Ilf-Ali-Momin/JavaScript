console.log(this);
//run this line on any web brower and you'll see window rather than empty {} 

var game = "cricket";

function sayName() {
  var name ="ali";
  console.log(this);
  
}
sayName();