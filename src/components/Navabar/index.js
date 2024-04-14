
import { CiSearch } from "react-icons/ci";
import { IoBagOutline } from "react-icons/io5";
import { FiUser } from "react-icons/fi";
import { BsBookmark } from "react-icons/bs";


import "./index.css"


const Navbar=()=>(

   

  
        <>

<div className="navSection1">
   
       <div>
            <p>TANN TRIM</p>
      </div>

        <div className="navItems">
        <CiSearch size={20} className="icons"/>
        <FiUser size={20} className="icons"/>
        <BsBookmark size={20} className="icons"/>
        <IoBagOutline size={20} className="icons"/>
       

        
      
        </div>

        </div>
<div className="navSection2">
    <p>Bags</p>
    <p>Travel</p>
    <p>Accessories</p>
    <p>Gifting</p>
    <p>Jewellery</p>
</div>



<div className="navSection3">

    <div className="bagSection">
    <img src="https://imagetolink.com/ib/g87iVMsgiF.png" alt="g87iVMsgiF"/>
      <p>All Bags</p>
    </div>

    <div className="bagSection">
    <img src="https://imagetolink.com/ib/oCBv6SuEQB.png" alt="oCBv6SuEQB"/>
        <p>Pouch</p>
    </div>

    <div className="bagSection">
    <img src="https://imagetolink.com/ib/T7GBihEta0.png" alt="T7GBihEta0"/>
        <p>Tote Bags</p>
    </div>

    <div className="bagSection">
    <img src="https://imagetolink.com/ib/7Na3ivqG65.png" alt="7Na3ivqG65"/>
       <p>Duffle Bags</p>
    </div>

    <div className="bagSection">
    <img src="https://imagetolink.com/ib/dTs6GzX3Z9.png" alt="dTs6GzX3Z9"/>
       <p>Laptop sleeve</p>
    </div>

    <div className="bagSection">
    <img src="https://imagetolink.com/ib/KfvgiyJu6z.png" alt="KfvgiyJu6z"/>
       <p>Meesenger Bags</p>
    </div>

    <div className="bagSection">
    <img src="https://imagetolink.com/ib/XYPDhxAiuI.png" alt="XYPDhxAiuI"/>
         <p>Slings Bgs</p>
    </div>

    <div className="bagSection">
    <img src="https://imagetolink.com/ib/J47qaVlJ51.png" alt="J47qaVlJ51"/>
        <p>Hand Bags</p>
    </div>
    <div className="bagSection">
    <img src="https://imagetolink.com/ib/l8vNNMyZ67.png" alt="l8vNNMyZ67"/>
    <p>Back packs</p>
    </div>
    
    

   

    
    
</div>
     
          </>)


export default Navbar