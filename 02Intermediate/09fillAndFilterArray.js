// fill, what it does? It just fill the value you give to array according to theie index number and filter just filter out that thing you can use !=, >, < etc

var testArray =[2,4,6,3,1,7,4,2];

console.log(testArray.fill("empty")); 

const myNumber =[25,67,54,2,34,32,99];

const result = myNumber.filter((num)=>num>54);

//console.log(result);

var users =["Ted", "Tim", "Ton","Sam","Sor","Sod"];

// passing up a range first value is inclusive and the last value or the end range is always exclusive
//means if I say start from value 4 and end it on 9 the 4 value is gonna be inclusive and 9 value is exclusive

// console.log(users.slice(1,3)); //slice just exclude the part of an array means if you write slice(1,5)it cut the 5th value and show value from 1 to 4
 users.splice(1,3,"HI");//splice cut the values and put another value given to splice function. means (1,3,"Hi") here 1 is index number so it cut 1 index number value and then 3 which means whats the value come after the index number value on 3rd position it cut it out and put Hi in it  
 
 console.log(users)