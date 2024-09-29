import Product from './product.jsx'

function productTab() {
  //  let arr=[ "this" , "is" ,"arr"]
  let style={
    display:"flex",
    flexWrap:"wrap",
    justifyContent:"center",
    alignItem:"center"
  }
  return <>
    <div style={style}>
      <Product Title={"pradip"} price={21} oldPrice={12} />
      <Product Title={"Sanket"} price={23} oldPrice={12} />
      <Product Title={"balak"} price={12} oldPrice={45} />
      <Product Title={"abhi"} price={34} oldPrice={54} />
    </div>
  </>;
}

export default productTab;