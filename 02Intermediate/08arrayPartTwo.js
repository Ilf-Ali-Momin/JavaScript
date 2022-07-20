//we can use any line for function 

//1) function isEven(element){}
//2) var isEven = function(element){}
//or 
var isEven=(element)=>{
  // if (element % 2 ===0) {
  //   return true;
    
  // }
  // return false;
  return element % 2===0;
}

//console.log(isEven(2));

// var result =[2,4,6,8,9].every(isEven);  //what every do? it goes toevery element in array and whatever is inside that every() it will do it with every element
//  console.log(result);
//  var result =[2,4,6,8,10].every(isEven); 
//  console.log(result);

var result =[2,4,6,8,10].every((e)=>{
  return e % 2 ===0}); //return keyword use when you use {}. If you dont want to use return dont use{}/with retuen keyword

console.log(result);

var result =[2,4,6,8,10].every((e)=> e % 2 ===0); //without return keyword

console.log(result);