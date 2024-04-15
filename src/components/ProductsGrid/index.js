import axios from "axios"
import Products from "../Products"
import { GoUpload } from "react-icons/go";
import "./index.css"
import { useEffect, useState } from "react";




const ProductsGrid =()=>{

    const [products,setProducts]=useState([])
  
useEffect(()=>{
    axios.get("https://terranxtserver.onrender.com/category/Backpacks")
    
    .then(res=>{setProducts(res.data.Backpacks); console.log(res.data.Backpacks)})
    .catch(err=>console.log(err))
},[])
return (
    


<div className="PrductGrid">

    <div className="productdetails">

        <div>
          <p>Bags . Backpacks</p>
        </div>

        <div className="productCount">
            <p>8 products</p>
            <GoUpload/>

        </div>

    </div>
   {
    products.length>0 ? <Products productsData={products}/> : <h1 className="Loading">Loading Products...</h1>
   }
    
    
</div>


)
}
export default ProductsGrid