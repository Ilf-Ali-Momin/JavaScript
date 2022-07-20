// for(let i =0; i<10; i++){
//    console.log(i);

// }

const myStates = ["Sindh","Punjab", 2022,"balochistan","KPK"];

for (let i = 0; i < myStates.length;i++) {
  if (typeof myStates[i]!=='string') 
  continue;
  console.log(myStates[i]);

}
  