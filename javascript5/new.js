let btns = document.querySelectorAll("button");
// btn.onclick=hello;

for(btn of btns){
    // btn.onclick=hello;
    // btn.onclick=hii;
    btn.addEventListener("click",hello);
    btn.addEventListener("dblclick",hii);
}

// btn.onmouseenter=function () {
//     console.log("you entered button");
// }
// btn.onclick=function () {
//     console.log("you click button");
// }
function hello() {
    console.log("hello");
}
function hii() {
    console.log("dbl");
}



















// let btn = document.querySelector("button");
// function sayhello(){
//     alert('hello');
// }
// btn.onlick = sayhello;

// btn.addEventListener("click", ()=>{
//     console.log("hello");
// });


// btn.onlick = sayhello;
// for(btn of btns){
//     btn.onlick=sayhello;
// }


// console.dir(btn);
// btn.onclick= function(){
//     alert("button was clicked");
// }


// console.dir(document.querySelector('button'));
// document.querySelector('button').onclick = function (){
//     ("button was clicked");
// }


// document.addEventListener('DOMContentLoaded', function() {
//     // Your code here
//     let btn = document.querySelector('button');
//     console.dir(btn);
//     btn.onclick = function() {
//         alert("button was clicked");
//     };
// });



