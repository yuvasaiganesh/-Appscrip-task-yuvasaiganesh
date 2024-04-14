import "./index.css"
import { IoBagAddOutline } from "react-icons/io5";
const Products=(props)=> {
    const {productsData}=props
    
   
   
return (
    
   
   <div className="productsSection">
      {productsData.map(product => (
        <div key={product.id}  className="product-card">
         
            <img src={product.img} alt={product.title} />
            <p className="productTitle">{product.title}</p>
            <div className="offerSection">
                <p>{product.price} <span className="price">10000 </span><span className="originalPrice">50% off</span></p>

                <IoBagAddOutline/>
                </div>
            
          
        </div>
      ))}
      
    
  </div>
  )


};




export default Products