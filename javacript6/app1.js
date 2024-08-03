let form=document.querySelector("form");
// let user=document.querySelector("#name");
// form.scroll({
//     top: 100,
//     left: 100,
//     behavior: "smooth",
// });
form.addEventListener("submit",function (event) {
    let name=document.querySelector("#name");
    let pass=document.querySelector("#pass");
    // let name=this.elements[0];
    // let pass=this.elements[1];
    console.log(name.value);
    console.log(pass.value);
    console.dir(form);

    event.preventDefault();
    alert("you have submitted");
});
user.addEventListener("load",function () {
    console.log("this.value");
})



// let inp=document.querySelector("input");
// inp.addEventListener("keydown",function (event) {
//     console.log(event.key);
//     console.log(event.code);
//     console.log("press ");
// })







// let btn=document.querySelector("button");
// btn.addEventListener("click", function () {
//      console.dir(this);
//      this.style.backgroundColor="blue";
// })

