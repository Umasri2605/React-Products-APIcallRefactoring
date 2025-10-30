import React, { useEffect } from "react"
import './Products.css'
function Productslist(){
  var[products,setproducts]=React.useState([]);
  
  useEffect(function () {
  fetch("https://fakestoreapi.com/products/")
  .then((res)=>res.json())
  .then((data)=>{
   setproducts([...data]);
  })
},[])

  return(
    <div className="border border-3 border-warning p-3 m-3 bg-light" >
    <h1>Products Length:{products.length}</h1>
    <ul className="products-list">
    {
      products.map((product)=>{
      return (
      <li>
        <img src={product.image}  style={{width:"150px",height:"150px"}}alt=""/> 
        <h5>{product.title.slice(0,20)}</h5>
        <div className="footer">
        <h6>{product.rating.rate}<i class="bi bi-star-fill"></i></h6>
        <h6>RS.{product.price}</h6>
        </div>
        </li>
      )
      })
    }
      </ul>
    </div>
  )
}
export default Productslist;
