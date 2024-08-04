let div=document.querySelector("div");
let ul=document.querySelector("ul");
let lis=document.querySelectorAll("li");

div.addEventListener("click", function () {
    console.log("div click");
})
ul.addEventListener("click", function (event) {
    event.stopPropagation();
    console.log("ul click");
})

for(li of lis){
    li.addEventListener("click", function (event) {
        event.stopPropagation();
        console.log("li click");
    })
}
