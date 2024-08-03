let btn=document.querySelector("button");
let task=document.querySelector("#task");
let ul= document.querySelector("ul")
btn.addEventListener("click",function () {
    // console.log(task.value);
    let item=document.createElement("li");
    item.innerText=task.value;
    let dltbtn=document.createElement("button");
    dltbtn.innerText="delet";
    dltbtn.name="delet";
    // dltbtn.classList.add("delet");
    ul.appendChild(item);
    item.appendChild(dltbtn);
    task.value="";
})

ul.addEventListener("click",function (event) {
    if (event.target.nodeName=="BUTTON") {
         let dd=event.target.parentElement;
         console.log(dd);
         dd.remove();    
    }
    console.log("cliked");
    // dltd.remove;
})

// let dltfbtns=document.getElementsByName("delet");
// for(dltfbtn of dltfbtns){
//     dltfbtn.addEventListener("click",function(){
//          let par=this.parentElement;
//         console.log(par); 
//         par.remove();
//     });
// }