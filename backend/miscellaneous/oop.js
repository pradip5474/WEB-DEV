
// let arr1=[1,2,3,4];
// let arr2=[1,2,3,4];

// arr1.sayhello=()=>{
//     console.log("hello");
// }

// arr2.sayhello=()=>{
//     console.log("hello");
// }

// below code is of factory function

// function personMaker(name ,age) {
//     const person={
//          name: name, 
//          age: age,
//          talk(){
//             console.log(`hiii my name is ${name}`);
//          }
//     }
//     return person;
// }

// let p1=personMaker("pradip",21);
// let p2=personMaker("rishad",21);

// constructor
function person(name ,age) {
    this.name=name;
    this.age=age;
    console.log(name);
    console.log(age);
    console.log(this);
}
person.prototype.talk=function(){
    console.log(`my name is ${this.name}`);
}
let p1= person("pradip",21);
let p2= person("gaurav",21);


// using class
// class person{
//     constructor(name,age){
//         this.name=name;
//         this.age=age;   
//     }
//     talk(){
//         console.log(`my name is ${this.name}`);
//     }
// }
// let p1=new person("pradip",21);
// let p2=new person("gaurav",21);

//inheritance

// class person{
//     constructor(name,age){
//         this.age=age;
//         this.name=name;
//     }
//     talk(){
//         console.log(`hii my name is ${this.name}`);
//     }
// }

// class student extends person{
//     constructor(name,age,marks){
//         super(name,age);
//         this.marks=marks;
//     }
// }
// let s=new student("pradip",21,99);
// class teacher extends person{
//     constructor(name,age,subject){
//         super(name,age);
//         this.subject=subject;
//     }
// }

// let t=new teacher("sumit",21,"dance");
