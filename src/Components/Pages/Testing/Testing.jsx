import {  Outlet } from "react-router-dom";

import { LiaUserCheckSolid } from "react-icons/lia";
import { useContext, useEffect, useState } from "react";
import logo from './../../../assets/logo.png'
import Swal from "sweetalert2";
import { FaRegUser } from "react-icons/fa";
import { LuMapPin } from "react-icons/lu";
import { AuthContex } from "../../Providers/Authprovider";
import { CiShop } from "react-icons/ci";
import { IoHomeOutline } from "react-icons/io5";
import { BiSupport } from "react-icons/bi";
import { FaBoxOpen } from "react-icons/fa";
import { Footer } from "flowbite-react";
import {
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  
} from '@chakra-ui/react'
import Login from "../../Login/SignIn";




const Testing = () => {

  const { isOpen, onOpen, onClose } = useDisclosure()

  const handleLoginClick = () => {
    onOpen(); 
  };
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);


  const toggleDropdown = () => {
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
        <div className="navbar xl:px-24 max-w-screen-2xl container mx-auto">
  <div className={`navbar-start `}>
    <div className="dropdown lg:hidden relative">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden" onClick={toggleDropdown} >
      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </div>
      <div className={`menu  dropdown-content mt-3 z-[1]  h-full  space-y-2 w-60  ${isDropdownOpen ? '' : 'hidden'}`}>
      <div>
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
  <div tabIndex={0} role="button" className="" onClick={toggleDropdown}>
    {user.photoURL ? (
      <img className="w-10 rounded-full mx-auto" src={user.photoURL} alt="User Avatar" />
    ) : (
      <FaRegUser className="text-4xl text-pink-400" />
    )}
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
            <a rel="noopener noreferrer" href="/Login" className="flex items-center p-2 space-x-3 rounded-md">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-5 h-5 fill-current dark:text-gray-400">
                <path d="M440,424V88H352V13.005L88,58.522V424H16v32h86.9L352,490.358V120h56V456h88V424ZM320,453.642,120,426.056V85.478L320,51Z"></path>
                <rect width="32" height="64" x="256" y="232"></rect>
              </svg>
              <p className="text-[16px] font-semibold" onClick={handleLogOut}>Log Out</p>
            </a>
          </li>
        </ul>
      </div>
    </div>
  </div>
        </div>

      }
    
{
  user ? '' :
    <a className="btn rounded-full hidden px-6 bg-violet-400 text-white text-md lg:flex items-center gap-2 " onClick={handleLoginClick} >Login</a>
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
<Outlet></Outlet>
<Footer></Footer>
    </div>
  );
};

export default Testing;
