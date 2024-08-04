
// let newvalid=JSON.parse(`{"fact":"The Maine Coone is the only native American long haired breed.","length":62}`);
// console.log(newvalid.fact);
let para=document.querySelector("#fact");
let url="https://catfact.ninja/fact";
let btn=document.querySelector("button");
btn.addEventListener("click",async ()=>{
      let fat= await axios.get(url);
      let facts=fat.data.fact;
      para.innerHTML=facts;

})



let url2="https://dog.ceo/api/breeds/image/random";
let btn2=document.querySelector("#image");
let img=document.querySelector("img");


btn2.addEventListener("click", async()=>{
    const he={Headers:{Accept:"application/json"}}
     let ca= await axios.get(url2,he);
    //  console.log(ca);
     img.src= ca.data.message;
})


let url3="http://universities.hipolabs.com/search?name=";
let btn3=document.querySelector("#butt");
btn3.addEventListener("click",async()=>{
    let country=document.querySelector("#search").value;
    console.log(country);
    let call= await axios.get(url3+country);
      console.log(call);
})

// let country="india";
//  async  function getcolege() {
//       let call= await axios.get(url3+country);
//       console.log(call);
// }









// fetch(url).then((res)=>{
//     console.log(res);
//     return res.json()
// }).then((data)=>{
//     console.log(data.fact);
//     return fetch(url);
// }).then((date)=>{
//     return date.json();
// }).then((data2)=>{
//     console.log(data2.fact);
// })
// .catch((err)=>{
//     console.log(err);   
// })


// console.log("this is middle code or last code");


// async function fecc() {
//     let det=await fetch(url);
//     let file=await det.json();
//     console.log(file.fact);
// }
async function fecc() {
    let det=await axios.get(url);
    return det.data.fact;
}


