// function one() {
//     return 1;
// }
// function two() {
//     return one()+one();
// }
// function three() {
//     let ans=two()+one();
//     console.log(ans);
// }
// three();







let h1=document.querySelector("h1");
function changecolor(color,delay) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            h1.style.color=color;
            resolve("color is change");
        }, delay);
    })
}

async function change() {
    await changecolor("blue",1000);
    await changecolor("green",1000);
    await changecolor("red",1000);
    await changecolor("yellow",1000);
}


// changecolor("blue",1000)
//     .then(()=>{
//     changecolor("green",1000)
//     })
//     .then(()=>{
//         changecolor("red",1000)
//     }).then(()=>{
//         changecolor("yellow",1000)
//     });


// function savedbt(data,success,failure) {
//      let internet=Math.floor((Math.random()*10)+1);
//      if (internet>4) {
//         success();
//      }
//      else{
//         failure();
//      }
// }

// savedbt("pradip",()=>{
//     console.log("data is  dscd saved");
//     savedbt("suresh",()=>{
//         console.log("suresh is saved");
//         savedbt("mali",()=>{
//             console.log("mali is saved");
//         }, ()=>{
//             console.log("mali is not saved");
//         })
//     },()=>{
//         console.log("suresh is not saved");
//     })
// },()=>{
//     console.log("data is not saved");
// });


// function savedbts(data) {
//     return new Promise((resolve, reject) => {
//         let internet=Math.floor((Math.random()*10)+1);
//         if (internet>4) {
//             resolve("greather than 4");
            
//         }
//         else{
//             reject("less than 4");
//         }
//     })
// }


// savedbts("pradip").then((result)=>{
//     console.log("pradip is saved");
//     console.log(result);
//     return savedbts("mali")
// }).then((result)=>{
//     console.log("mali is saved");
//     console.log(result);
//     return savedbts("suresh");
// })
// .then((result)=>{
//     console.log("suresh is saved");
//     console.log(result);
// })
// .catch((error)=>{
//     console.log("probmise is not resolve");
//     console.log(error);     
// })

// async function hello() {
//     // return "hello";
// }


// function hello() {
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             // console.log("hello");
//             let num=Math.floor(Math.random()*10)+1;
//             console.log(num);
//             resolve();  
//         },5000)
//     });
// }

// async function he(){
//     await hello();
//     await hello();
//     await hello();
// }



