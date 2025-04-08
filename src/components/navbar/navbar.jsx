import React from 'react';
import logo from '../../assets/LOGO123.png';
import CartIcon from './CartIcon';
import { Link } from 'react-router-dom';

function Navbar({setShowLogin,setAuthState,cartItemslist}) {
  return (
    <nav className="bg-orange-500 bg-opacity-45 flex justify-between items-center h-22">
      <div className="p-5 ml-5">
        <Link to='/'><img width={250} height={40} src={logo} alt="logo" /></Link>
      </div>
      <div className="w-100 mr-[2rem] flex gap-3 justify-between items-center">
        <ul className="flex gap-4 scroll-smooth">
          <Link to='/' className="font-bold">Home</Link>
          <Link to='/About' className="font-bold">About</Link>
          <a href="#Reach-us" className="font-bold">Contact Us</a>
          {/* <Link to='/Cart' ><i className="fa-solid fa-cart-shopping text-xl"></i><p></p></Link> */}
          <CartIcon cartItemslist={cartItemslist}/>
        </ul>
        <div className="text-zinc-900 ml-5 flex justify-between items-center">
            <a onClick={()=>{setShowLogin(true)
                             setAuthState("Login")
            }} className="font-bold mr-1 cursor-pointer">Login</a>
            <p className="font-bold">|</p>
            <div className="ml-2 bg-red-500 bg-opacity-65 rounded-md p-1.5 text-zinc-800 tracking-tighter" >
              <a onClick={()=>{setShowLogin(true)
                              setAuthState("Sign up")
              }} className="font-bold cursor-pointer">Sign Up</a>
            </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;