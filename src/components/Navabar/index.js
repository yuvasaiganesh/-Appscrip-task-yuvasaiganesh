
import { CiSearch } from "react-icons/ci";
import { FaShoppingCart } from "react-icons/fa";
import { RiAccountCircleLine } from "react-icons/ri";
import { FcLike } from "react-icons/fc";

import "./index.css"


const Navbar=()=>(

   

  
        <>

<div className="navSection1">
    <div>
        <img src="" alt="logo"/>
    </div>
       <div>
            <p>LoGo</p>
      </div>

        <div className="navItems">
        <CiSearch/>
        <FcLike/>
        <FaShoppingCart/>
        <RiAccountCircleLine/>


      
        </div>

        </div>
<div className="navSection2">
    <p>Home</p>
    <p>Skills</p>
    <p>Stories</p>
    <p>About</p>
    <p>Contact Us</p>
</div>
     
          </>)


export default Navbar