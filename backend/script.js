// let n=5;
// for (let index = 0; index <n ; index++) {
//     console.log("hello",index); 
// } 
// let arr=process.argv;
// console.log(process.argv);
// for (let i = 2; i < arr.length; i++) {
//     console.log("hello  " + arr[i]);
    
// }

// const re=require("./math"); 
    
// console.log(re.sum(3,8));
// console.log(re.mul(3,8));
// console.log(re);    

// const re=require("./fruits");
// console.log(re[re ]);


// var figlet = require("figlet");

// figlet("Shrutika", function (err, data) {
//   if (err) {
//     console.log("Something went wrong...");
//     console.dir(err);
//     return;
//   } 
//   console.log(data);
// });

import { generate } from "random-words";
import {sum,PI}from "./math.js";
// console.log(sum(3,6),PI);
console.log(generate());
