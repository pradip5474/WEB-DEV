import { useState } from "react"

export default function Ludo() {
    let [move,setmove]=useState({red:0,blue:0,green:0,yellow:0});
    let [arr,setarr]=useState(["no moves"]);
    
    let updateblue= () => {
        move.blue += 1;
        // setmove({...move});  
        // arr.push("blue ");
        setarr([...arr,"blue"]);
        console.log(arr);
        }
    //in setmove(here we can pass the call back function also)
    let updatered= () => {
        move.red += 1;
        setmove({...move});
    }
    let updategreen= () => {
        move.green += 1;
        setmove({...move});
    }
    let updateyellow= () => {
        move.yellow += 1;
        setmove({...move});
    }
    return (
        <div>
            <p>game begins</p>
            <p>{arr}</p>
            <div>
                <p>Blue moves={move.blue}</p>
                <button onClick={updateblue} style={{backgroundColor:"blue"}} >+1</button>
                <p>Yellow moves={move.yellow}</p>
                <button onClick={updateyellow} style={{backgroundColor:"yellow",color:"black"}} >+1</button>
                <p>Green moves={move.green}</p>
                <button onClick={updategreen} style={{backgroundColor:"green"}} >+1</button>
                <p>Red moves={move.red}</p>
                <button onClick={updatered} style={{backgroundColor:"red"}} >+1</button>
            </div>
        </div>
    )
}
