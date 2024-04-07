import { useState } from "react"
import Products from "../Products"
import "./index.css"



const ProductsGrid =()=>{
    let [filter,setFilter]=useState(false)
    let [men, setMens]=useState(true)
    let [women, setWomen]=useState(false)
    let [jewellery, setJewellery]=useState(false)
    let [electronics, setElectronics]=useState(false)
    const toShow=()=>{
        setFilter(true)
    }

    const toHide=()=>{
        setFilter(false)
    }

    const toMens=()=>{
        setMens(prev=>!prev)
    }

    const toJewellery=()=>{
        setJewellery(prev => !prev)
    }

    const toWomens=()=>{
        setWomen(prev => !prev)
    }
    const toElectronics=()=>{
        setElectronics(prev => !prev)
    }
    const toclear=()=>{
        setElectronics(false);
        setJewellery(false);
        setMens(false)
        setWomen(false)
    }

return (<div>
    <div className="sortingSection">
    <div>
        {filter ? <button className="hidebutton" onClick={toHide}>&lt; Hide Filters</button>:
        <button className="hidebutton" onClick={toShow}>&gt; Show Filters</button>}
    </div>
<select>
    <option>Recommended</option>
    <option>Newest First</option>
    <option>Popular</option>
    <option>Price: High to Low</option>
    <option>Price: Low to High</option>

</select>

</div>
<div className="displaySection">
   {filter &&
<aside>
 
    <button className="clearButton" onClick={toclear}>Clear All Filter</button>
    
    <div className="labelSection">
    <input checked={men} id="one" type="checkbox"  onChange={toMens}/>
    <label htmlFor="one">Mens Clothing</label>
    </div>
    <div className="labelSection">
    <input checked={women} id="two" type="checkbox" onChange={toWomens}/>
    <label htmlFor="two">Womens Clothing</label>
    </div>
    <div className="labelSection">
    <input checked={jewellery} id="three" type="checkbox" onChange={toJewellery}/>
    <label htmlFor="three">Jewellery</label>
    </div>
    <div className="labelSection">
    <input checked={electronics} id="four" type="checkbox" onChange={toElectronics}/>
    <label htmlFor="four">Electronics</label>
    </div>
</aside>}
    
<Products mendata={men} womendata={women} jewellerydata={jewellery} electronicsdata={electronics}/>
</div>


</div>)
}
export default ProductsGrid