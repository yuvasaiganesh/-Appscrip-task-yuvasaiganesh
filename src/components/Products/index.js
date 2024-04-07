
import axios from 'axios';
import React, { useState, useEffect } from 'react';
import "./index.css"

const Products=(props)=> {
    const [menproducts, setmensProducts] = useState([]);
    const [womenproducts, setwomenProducts] = useState([]);
    const [electronicsproducts, setelectronicsProducts] = useState([]);
    const [jewelleryproducts, setjewelleryProducts] = useState([]);
    let [finalData, setFinaldata]=useState([])
    
    const {mendata,womendata, jewellerydata, electronicsdata} =props
    console.log(mendata)
    console.log(womendata)
    console.log(jewellerydata)
    console.log(electronicsdata)


    const getProducts = async () => {
        const promises = [];

        if (jewellerydata) {
            promises.push(
                axios.get(`https://fakestoreapi.com/products/category/jewelery`)
                    .then(response => setjewelleryProducts(response.data))
                    .catch(error => console.error('Error fetching products:', error))
            );
        }

        if (mendata) {
            promises.push(
                axios.get(`https://fakestoreapi.com/products/category/men's clothing`)
                    .then(response => setmensProducts(response.data))
                    .catch(error => console.error('Error fetching products:', error))
            );
        }

        if (womendata) {
            promises.push(
                axios.get(`https://fakestoreapi.com/products/category/women's clothing`)
                    .then(response => setwomenProducts(response.data))
                    .catch(error => console.error('Error fetching products:', error))
            );
        }

        if (electronicsdata) {
            promises.push(
                axios.get(`https://fakestoreapi.com/products/category/electronics`)
                    .then(response => setelectronicsProducts(response.data))
                    .catch(error => console.error('Error fetching products:', error))
            );
        }

        await Promise.all(promises);
    };

    useEffect(() => {
        setFinaldata([])
        getProducts();
    }, [mendata, womendata, jewellerydata, electronicsdata]);

    useEffect(() => {
        const newData = [];
        if (mendata) newData.push(...menproducts);
        if (womendata) newData.push(...womenproducts);
        if (jewellerydata) newData.push(...jewelleryproducts);
        if (electronicsdata) newData.push(...electronicsproducts);
        setFinaldata(newData);
    }, [mendata, womendata, jewellerydata, electronicsdata, menproducts, womenproducts, jewelleryproducts, electronicsproducts]);

return (
    
   
   <div className="product-grid">
      {finalData.map(product => (
        <div key={product.id}  className="product-card">
         
            <img src={product.image} alt={product.title} />
            <p className="productTitle">{product.title}</p>
          
        </div>
      ))}
    
  </div>
  )


};




export default Products