import './product.css'


function Product({ Title, price ,oldPrice}) {
    let style={backgroundColor: price>20 ?"yellow":"red"};
    return <>
        <div className="Product" >
            <h2 style={style}>{Title}</h2>
            <h2>des</h2>
            <span style={style}><s>{oldPrice}</s></span>
            <span style={style}>{price}</span>
            


            {/* {price > 20 ? <p>he can VOTE</p>: null } */}
            {/* <h4>{arr.map((arry) => <li>{arry}</li>)}</h4> */}
        </div>

    </>
}

export default Product;