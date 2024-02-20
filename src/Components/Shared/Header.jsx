import {  Outlet } from "react-router-dom";
import { LuMapPin } from "react-icons/lu";
import { LiaUserCheckSolid } from "react-icons/lia";
import Footer from "./Footer";
import { FaRegUser } from "react-icons/fa";
import { useContext, useEffect, useState } from "react";
import logo from './../../assets/logo.png'
import Swal from "sweetalert2";
import { AuthContex } from "../Providers/Authprovider";
import Component from "../Home/Modal";
import { CiShop } from "react-icons/ci";
import { IoHomeOutline } from "react-icons/io5";
import { BiSupport } from "react-icons/bi";
import { FaBoxOpen } from "react-icons/fa";

import {
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  
} from '@chakra-ui/react'
import Login from "../Login/SignIn";

const Header = () => {

  const {user, LogOut} = useContext(AuthContex)

  const { isOpen, onOpen, onClose } = useDisclosure();

  useEffect(() => {
    if (user) {
      onClose(); // Close the drawer if the user exists
    }
  }, [user, onClose]);

  const handleLoginClick = () => {
    onOpen(); 
  };

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  
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
    <a href="/complain" >I have a Complain</a>
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
    <div className="dropdown lg:hidden relative">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden" onClick={toggleDropdown} >
      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </div>
      <div className={`menu  dropdown-content mt-3 z-[1]  h-full  space-y-2 w-60  ${isDropdownOpen ? '' : 'hidden'}`}>
      <div className=" bg-cyan-100 shadow-lg">
          { user && <div className="flex items-center">
  {user.photoURL ? (
    <img
      className="w-12 h-12 rounded-lg"
      src={user.photoURL}
      alt="User Avatar"
    />
  ) : (
    <LiaUserCheckSolid className="text-6xl text-pink-400" />
  )}
  <div className="text-black ml-4">
    <h2 className="text-lg font-semibold">Hi, {user.displayName}</h2>
    <span className="flex items-center space-x-1">
      <a
        rel="noopener noreferrer"
        href="#"
        className="text-lg hover:underline text-violet-500"
      >
        View profile
      </a>
    </span>
  </div>
</div>
}
          <div className="divide-y ">
          <ul className="pt-2 pb-4 space-y-1 text-sm">
          <li className="rounded-sm">
          <a rel="noopener noreferrer" href="/" className="flex items-center p-2 space-x-3 rounded-md">
          <IoHomeOutline className="text-2xl font-semibold"></IoHomeOutline>
          <span className="text-[16px]">Home</span>
          </a>
          </li>
          <li className="rounded-sm">
          <a rel="noopener noreferrer" href="/shop" className="flex items-center p-2 space-x-3 rounded-md">
          <CiShop className="text-2xl font-semibold"></CiShop>
          <span className="text-[16px]">Shop</span>
          </a>
          </li>
          { user && <li className="rounded-sm">
          <a rel="noopener noreferrer" href="/myorders" className="flex items-center p-2 space-x-3 rounded-md">
          <FaBoxOpen className="text-2xl font-semibold "></FaBoxOpen>
          <span className="text-[16px]">My Orders</span>
          </a>
          </li>}
          <li className="rounded-sm  ">
          <a rel="noopener noreferrer" href="#" className="flex items-center p-2 space-x-3 rounded-md">
           <BiSupport className="text-2xl font-semibold"></BiSupport> 
          <details>
    <summary className="text-[16px]">Support</summary>
    <ul className="p-2">
    <li> <a href="/trackorder" > Track My Order</a>
    </li>
    <li> <a href="/complain" >I have a Compain</a>
    </li>
    </ul>
    </details>
          </a>
          </li>
          </ul>
          <ul className="pt-4 pb-2 space-y-1 text-sm">
          <li>
          <a rel="noopener noreferrer" href="/Login" className="flex items-center p-2 space-x-3 rounded-md">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-5 h-5 fill-current dark:text-gray-400">
          <path d="M440,424V88H352V13.005L88,58.522V424H16v32h86.9L352,490.358V120h56V456h88V424ZM320,453.642,120,426.056V85.478L320,51Z"></path>
          <rect width="32" height="64" x="256" y="232"></rect>
          </svg>
          <p className=" text-[16px] font-semibold">{ user ? 'Log Out' : 'Log In'}</p>
          </a>
          </li>
          </ul>
          </div>
          </div>
      </div>
    </div>
    <a href="/" className="text-xl"><img className="w-28 lg:w-32 items-center justify-center" src={logo} alt="logo" /></a>
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
        user &&  
        <div className="dropdown hidden lg:flex dropdown-left relative">
          <div className="flex items-center justify-center gap-4">
  <div tabIndex={0} role="button"  onClick={toggleDropdown}>
    {user.photoURL ? (
      <img className="w-10 rounded-full mx-auto" src={user.photoURL} alt="User Avatar" />
    ) : (
      <FaRegUser className="text-4xl text-pink-400" />
    )}
  </div>
  <div>
  <svg
          className="hidden fill-current sm:block text-black dark:text-white"
          width="12"
          height="8"
          viewBox="0 0 12 8"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M0.410765 0.910734C0.736202 0.585297 1.26384 0.585297 1.58928 0.910734L6.00002 5.32148L10.4108 0.910734C10.7362 0.585297 11.2638 0.585297 11.5893 0.910734C11.9147 1.23617 11.9147 1.76381 11.5893 2.08924L6.58928 7.08924C6.26384 7.41468 5.7362 7.41468 5.41077 7.08924L0.410765 2.08924C0.0853277 1.76381 0.0853277 1.23617 0.410765 0.910734Z"
            fill=""
          />
        </svg>
  </div>
          </div>
  <div className={`menu dropdown-content mt-14 z-[1] h-full space-y-2 ml-auto ${isDropdownOpen ? '' : 'hidden'}`}>
    <div className="bg-white p-4 shadow-lg rounded-md w-72">
      {user && (
        <div className="flex items-center">
          {user.photoURL ? (
            <img className="w-12 h-12 rounded-lg" src={user.photoURL} alt="User Avatar" />
          ) : (
            <LiaUserCheckSolid className="text-6xl text-pink-400" />
          )}
          <div className="text-black px-2 overflow-hidden">
            <h2 className="text-lg font-semibold">Hi, {user.displayName}</h2>
            <span className="flex items-center space-x-1">
              <a className="hover:underline text-violet-500">{user.email}</a>
            </span>
          </div>
        </div>
      )}
      <div className="divide-y">
        <ul className="pt-2 pb-4 space-y-1 text-sm">
          <li className="rounded-sm">
            <a rel="noopener noreferrer" href="/" className="flex items-center p-2 space-x-3 rounded-md">
              <FaRegUser className="text-xl font-semibold" />
              <span className="text-[16px]">My Profile</span>
            </a>
          </li>
          {user && (
            <li className="rounded-sm">
              <a rel="noopener noreferrer" href="/myorders" className="flex items-center p-2 space-x-3 rounded-md">
                <FaBoxOpen className="text-2xl font-semibold" />
                <span className="text-[16px]">My Orders</span>
              </a>
            </li>
          )}
          <li className="rounded-sm">
              <a rel="noopener noreferrer" href="/myorders" className="flex items-center p-2 space-x-3 rounded-md">
                <LuMapPin className="text-2xl font-semibold" />
                <span className="text-[16px]">My Address</span>
              </a>
            </li>
          <li className="rounded-sm">
            <a className="flex items-center p-2 space-x-3 rounded-md">
              <BiSupport className="text-2xl font-semibold" />
              <span className="text-[16px]">+8801407975656</span>
            </a>
          </li>
        </ul>
        <ul className="pt-4 pb-2 space-y-1 text-sm">
          <li>
          <button onClick={handleLogOut} className="flex items-center gap-3.5 px-6 py-2 text-sm font-medium duration-300 ease-in-out hover:text-primary lg:text-base">
          <svg
            className="fill-current"
            width="22"
            height="22"
            viewBox="0 0 22 22"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M15.5375 0.618744H11.6531C10.7594 0.618744 10.0031 1.37499 10.0031 2.26874V4.64062C10.0031 5.05312 10.3469 5.39687 10.7594 5.39687C11.1719 5.39687 11.55 5.05312 11.55 4.64062V2.23437C11.55 2.16562 11.5844 2.13124 11.6531 2.13124H15.5375C16.3625 2.13124 17.0156 2.78437 17.0156 3.60937V18.3562C17.0156 19.1812 16.3625 19.8344 15.5375 19.8344H11.6531C11.5844 19.8344 11.55 19.8 11.55 19.7312V17.3594C11.55 16.9469 11.2062 16.6031 10.7594 16.6031C10.3125 16.6031 10.0031 16.9469 10.0031 17.3594V19.7312C10.0031 20.625 10.7594 21.3812 11.6531 21.3812H15.5375C17.2219 21.3812 18.5625 20.0062 18.5625 18.3562V3.64374C18.5625 1.95937 17.1875 0.618744 15.5375 0.618744Z"
              fill=""
            />
            <path
              d="M6.05001 11.7563H12.2031C12.6156 11.7563 12.9594 11.4125 12.9594 11C12.9594 10.5875 12.6156 10.2438 12.2031 10.2438H6.08439L8.21564 8.07813C8.52501 7.76875 8.52501 7.2875 8.21564 6.97812C7.90626 6.66875 7.42501 6.66875 7.11564 6.97812L3.67814 10.4844C3.36876 10.7938 3.36876 11.275 3.67814 11.5844L7.11564 15.0906C7.25314 15.2281 7.45939 15.3312 7.66564 15.3312C7.87189 15.3312 8.04376 15.2625 8.21564 15.125C8.52501 14.8156 8.52501 14.3344 8.21564 14.025L6.05001 11.7563Z"
              fill=""
            />
          </svg>
          Log Out
        </button>
          </li>
        </ul>
      </div>
    </div>
  </div>
        </div>
      }
 <div className="hidden lg:grid">
     {
       user ? '' :
     <a  className="btn my-4  rounded-full hidden px-6 bg-violet-400 text-white text-md lg:flex items-center gap-2 " onClick={handleLoginClick} >Login</a>
    } 
    <Drawer onClose={onClose} isOpen={isOpen} size='sm'>
                      <DrawerOverlay />
                      <DrawerContent>
                        <DrawerCloseButton />
                        <DrawerHeader></DrawerHeader>
                        <DrawerBody>
                          <Login></Login>
                        </DrawerBody>
                        
                      </DrawerContent>
    </Drawer>
 </div>
    
  </div>
 </div>
</div>
<div className="mt-20">
<Outlet></Outlet>
</div>
<Footer></Footer>
    </div>
  );
};

export default Header;