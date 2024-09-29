import { useState } from "react"

export default function Counter(){
    let [count,setCount]=useState(0);
    function increasecount() {
        setCount((preval)=>{
           return  preval+1;
        });
        setCount((preval)=>{
           return preval+1;
        });
        console.log(count);
    }   
    
    
    return (
        <div>
            <h1>Conut ={count}</h1>
            <button onClick={increasecount}>click me</button>
        </div>
    )
}
