let btn=document.querySelector("button");

btn.addEventListener("click",function(){
    // let getrandomcolour=getrandomcolour();
    let randomolor = getrandomcolour();
    let h3 = document.querySelector("h3");
    h3.innerText=randomolor;
    let div= document.querySelector("div");
    div.style.backgroundColor=randomolor;
    div.style.width='200px';
    console.log("color updated");
});

function getrandomcolour() {
    let red=Math.floor(Math.random()*255);
    let green=Math.floor(Math.random()*255);
    let black=Math.floor(Math.random()*255);
    let color=`rgb(${red},${green},${black})`;
    return color;
}