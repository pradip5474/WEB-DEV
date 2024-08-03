let h3=document.querySelector("h3");
let gameseq=[];
let userseq=[];
let gamecolor=["yellow","red","purple","green"];
let start=false;
let level=0;

document.addEventListener("keypress",function(){
    if (start==false) {
         console.log("it started");
         start=true;
         
         
         
         
        
         

        levelup();
    }
})
function levelup() {
    level++;
    h3.innerText=`Level${level}`;
    let colorindx=Math.floor(Math.random()*3);
    let randomcolor=gamecolor[colorindx];
    let gamebtn=document.querySelector(`.${randomcolor}`);
    console.log(gamebtn);
    flash(gamebtn);
}

function flash(btn) {
    btn.classList.add('flash');
    setTimeout(function() {
        btn.classList.remove('flash');
    }, 100);
}