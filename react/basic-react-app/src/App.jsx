import './App.css'
// import Title from './title.jsx'
import ProductTab from './productTab.jsx'
import Box from "./Box.jsx"
import Button from "./button.jsx"
import Form from "./form.jsx"
// function Discription() {
//   return <>
//       <h2>{name}</h2>
//       <h2>{age}</h2>
//       <h1>{arr.map((arry)=> <li>{arry}</li> )}</h1>
//   </>
// }

function App() {
  
  return (<>
    <ProductTab />
    <Button/>
    <Form/>
    {/* <Discription  /> */}
    {/* <Box userName="pradip mali" textColor="pink" /> */}
  </>) ;
}

export default App
