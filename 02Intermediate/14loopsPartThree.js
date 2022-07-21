const names =["youtube", "facebook","Instagram","Netflix"];

for(const n of names){
  console.log(n);
}

const symbols ={
  yt: "youtube",
  ig: "Instagram",
  fb:"Facebook"

}
for(const n in symbols){
  //console.log(symbols[n]);
  //console.log(symbols);
  console.log(`Key is ${n} and value is: ${symbols[n]}`);
}