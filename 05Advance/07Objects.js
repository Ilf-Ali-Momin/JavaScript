import User from "./06classjs"; //new syntax

//const User = require("./06classjs.js"); //common syntax

const ali =  new User("ali", "ali@gmail.com");

console.log(ali.getInfo());
ali.enrollCourse("react");
ali.enrollCourse("solidity");

console.log(ali.getCourseList());

let courses = ali.getCourseList();

courses.forEach((c) => cpnsole.log(c));
