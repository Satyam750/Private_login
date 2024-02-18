import React from 'react'
import { FaShoppingCart } from "react-icons/fa";
 import { Link } from 'react-router-dom';
import { Use_r_state } from '../context/Store';
const Header = () => {
  const {products:{cart}} = Use_r_state();
  const {products:{serchkey}, dispatch} = Use_r_state();
//  console.log(serchkey);





  return (
    <div className=" flex items-center   bg-gray-700  gap-[57vw] h-20">
    <div className="flex items-center justify-center ml-[2vw]">
      <Link to="/product" className="text-2xl font-semibold hover:bg-slate-800 p-2 rounded-2xl hover:text-cyan-300 ">Product Cart</Link>
    </div>

    <div className="flex gap-[7vw]  items-center">
    
      <div className="form-control">
        <input type="text" placeholder="Search"  className="input input-bordered w-24 md:w-auto" onChange={(e)=>{
          dispatch({
            type:"Search",
            payload:e.target.value,
          })
        }} />
      </div>

    <Link to="/cart"> 
    <div  role="button" className="btn m-1"> <FaShoppingCart/> <div className="badge badge-secondary">{cart && cart.length}</div> </div>
    </Link>

        
    </div>
   
  </div>
  )
}

export default Header