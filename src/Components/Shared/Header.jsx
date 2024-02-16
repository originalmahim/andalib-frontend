import { Link, Outlet } from "react-router-dom";
import { FaPhoneVolume } from "react-icons/fa6";
import { LiaUserCheckSolid } from "react-icons/lia";
import Footer from "./Footer";
import { FaRegUser } from "react-icons/fa";
import { useContext, useEffect, useState } from "react";
import logo from './../../assets/logo.png'
import Swal from "sweetalert2";
import { AuthContex } from "../Providers/Authprovider";
import Component from "../Home/Modal";

const Header = () => {

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleDropdownToggle = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const {user, LogOut} = useContext(AuthContex)
  console.log(user);
  const handleLogOut = () => {
            LogOut()
            .then(() => {
              Swal.fire(
                'Loged Out',
                'You have loged Out successfully',
                'success'
              )
            })
          }

  const [isStickey, setStickey] = useState(false);
  useEffect( () => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 0) {
       setStickey(true)
      }
      else{
       setStickey(false)
      }
    };
    window.addEventListener('scroll',handleScroll);
    return () => {
      window.addEventListener('scroll',handleScroll);
    }
  },[])
  
  const navItems = (
    <>
    <li>
    <a href="/">Home</a>
    </li>
    <li>
    <a href="/shop">Shop</a>
    </li>
    <li tabIndex={0}>
    <details>
    <summary>Services</summary>
    <ul className="p-2">
    <li> <a href="/trackorder" >Track My Order</a>
    </li>
    <li>
    <a>I have a Complain</a>
    </li>
    <li>
    <a>FAQ</a>
    </li>
    </ul>
    </details>
    </li>
    <li tabIndex={0}>
    <details>
    <summary>Help Desk</summary>
    <ul className="p-2">
    <li> <a href="/refund" >Return Policy</a>
    </li>
    <li>
    <a>Contact Us</a>
    </li>
    <li>
    <a>Join Our Team</a>
    </li>
    </ul>
    </details>
    </li>
    </>
    );



  return (
    <div className="" >
      <div className={`fixed top-0 right-0 left-0 bg-white  transition-all duration-300 z-10  ease-in-out ${isStickey ? ' shadow-md bg-base-100 transition-all duration-300 ease-in-out ' : ''}`}>
        <Component></Component>
        <div className="navbar xl:px-24 max-w-screen-2xl container mx-auto">
  <div className={`navbar-start `}>
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </div>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
        {navItems}
      </ul>
    </div>
    <a className="btn btn-ghost text-xl"><img className="w-28 lg:w-32 items-center justify-center" src={logo} alt="logo" /></a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
    {navItems}
    </ul>
  </div>
  <div className="navbar-end">
    {/* cart icon Start */}
    
    <div tabIndex={0} role="button" className="mr-3 items-center justify-center flex btn btn-ghost btn-circle">
        <div className="indicator">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
          <span className="badge badge-sm bg-pink-400 text-white indicator-item">0</span>
        </div>
    {/* cart icon End */}
    
      </div>
      {
        user ?  <div
        className={`dropdown dropdown-end hover:dropdown hover:dropdown-end ${isDropdownOpen ? 'open' : ''}`}
        onMouseEnter={handleDropdownToggle}
        onMouseLeave={handleDropdownToggle}
      >
        <label tabIndex={0} className="btn bg-transparent  btn-circle avatar">
            <LiaUserCheckSolid className="text-3xl text-pink-400"></LiaUserCheckSolid>
        </label>
        <ul tabIndex={0} className="mt-3 z-50 p-2 shadow menu menu-sm dropdown-content hover:dropdown-content bg-base-100 rounded-box w-52">
          <div className="px-2 border-b pb-2">
            {
              user.photoURL ? <img
              className="h-24 w-24 rounded-full mx-auto"
              src={user.photoURL}
              alt="User Avatar"
            /> : <LiaUserCheckSolid className="text-6xl text-pink-400"></LiaUserCheckSolid>
            }
            <p className="pt-2 text-lg font-semibold">Hi, {user.displayName}</p>
            <p className="text-sm text-gray-600">{user.email}</p>
          </div>
          <div className="mt-1">
            <Link to="/dashboard" className="btn btn-sm bg-yellow-300">
              Dashboard
            </Link>
            <button onClick={handleLogOut}
              className="btn btn-sm bg-yellow-300"
            >
              LogOut
            </button>
          </div>
        </ul>
      </div> : 
      <Link to='/Login' >
    <div tabIndex={0} role="button" className="mr-3 items-center justify-center flex btn btn-ghost btn-circle">
        <FaRegUser className="text-xl"></FaRegUser>
      </div>
      </Link>
      }
    
{
  user ? <a className="btn rounded-full hidden px-6 bg-violet-400 text-white text-md lg:flex items-center gap-2 " onClick={handleLogOut} >Log Out</a> :
    <a className="btn rounded-full hidden px-6 bg-violet-400 text-white text-md lg:flex items-center gap-2 "><FaPhoneVolume />Contact</a>
}
  </div>
 </div>
</div>
<Outlet></Outlet>
<Footer></Footer>
    </div>
  );
};

export default Header;