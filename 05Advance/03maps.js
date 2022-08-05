var myMap = new Map();

myMap.set(1, "Uno")
myMap.set(2, "dos")
myMap.set(3, "tres")
myMap.set(4, "Cuatro")

console.log(myMap);

// for(let key of myMap.key()){
//     console.log(`Key is ${key}`) ;
// }

// for(let value of myMap.values()){
//     console.log(`Value is ${value}`) ;
// }
for(let [key, value] of myMap){
    console.log(`Key is ${key} and Value is ${value}`);
}
//for loop always gives key first but forEach gives value first

myMap.forEach((key)=> console.log(`${key }`));

myMap.delete(2)
console.log(myMap);

