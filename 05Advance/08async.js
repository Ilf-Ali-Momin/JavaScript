const uno = ()=>{
    console.log("I am One");
};

const dos = ()=>{
    setTimeout(()=>{
        console.log("woowowowow");
    },1000)
    console.log("I am two");
};

const tres = ()=>{
    console.log("I am Three");
};

uno();
dos();
tres();


