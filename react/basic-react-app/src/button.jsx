function printHello(){
    console.log("hello world")
}
function para(){
    console.log("para")
}
export default function Button(){
    return <>
       <button type="button" onClick={printHello}>click me</button>
       <p onMouseOver={para}>this is a para for the demo</p>
    </>
}