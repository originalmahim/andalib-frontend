import { Outlet } from "react-router-dom";
import { FaPhoneVolume } from "react-icons/fa6";
import Footer from "./Footer";
import { useEffect, useState } from "react";
import logo from './../../assets/logo.png'

const Header = () => {

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
    <li tabIndex={0}>
    <details>
    <summary>Menu</summary>
    <ul className="p-2">
    <li> <a>All</a>
    </li>
    <li>
    <a>Ledies Bag</a>
    </li>
    <li>
    <a>Gents Bag</a>
    </li>
    </ul>
    </details>
    </li>
    <li tabIndex={0}>
    <details>
    <summary>Services</summary>
    <ul className="p-2">
    <li> <a>online Order</a>
    </li>
    <li>
    <a>Trace Order</a>
    </li>
    </ul>
    </details>
    </li>
    <li>
    <a>Offers</a>
    </li>
    </>
    );

  return (
    <div className="" >
      <div className={`fixed top-0 right-0 left-0 bg-white  transition-all duration-300 z-10  ease-in-out ${isStickey ? ' shadow-md bg-base-100 transition-all duration-300 ease-in-out ' : ''}`}>
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
    {/* cart icon */}
    
    <div tabIndex={0} role="button" className="mr-3 items-center justify-center flex btn btn-ghost btn-circle">
        <div className="indicator">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
          <span className="badge badge-sm text-violet-600 indicator-item">0</span>
        </div>
      </div>
    
    {/* cart icon */}

    <a className="btn rounded-full hidden px-6 bg-sky-400 text-white text-md lg:flex items-center gap-2 "><FaPhoneVolume />Contact</a>
  </div>
 </div>
</div>
<Outlet></Outlet>
<Footer></Footer>
    </div>
  );
};

export default Header;


// import Footer from "./Footer";
// import { Link, NavLink, Outlet } from "react-router-dom";
// import {  useState } from "react";
// const Header = () => {

//   const [isDropdownOpen, setIsDropdownOpen] = useState(false);

//   const handleDropdownToggle = () => {
//     setIsDropdownOpen(!isDropdownOpen);
//   };

//           // const {user, LogOut} = useContext(AuthContex)
//           const user = false;
//           // const handleLogOut = () => {
//           //           LogOut()
//           //           .then(() => {
//           //             Swal.fire(
//           //               'Loged Out',
//           //               'You have loged Out successfully',
//           //               'success'
//           //             )
//           //           })
//           //         }

//           const links = <>

//           <li className="flex">
//           <NavLink to= '/'  className="text-xl flex items-center px-4 -mb-1 border-b-2 border-transparent ">Home</NavLink>
//           </li>
//           <li className="flex">
//           <NavLink to= '/alljobs'  className="text-xl flex items-center px-4 -mb-1 border-b-2 border-transparent ">All Meals</NavLink>
//           </li>
//           <li className="flex">
//           <NavLink to= '/alljobs'  className="text-xl flex items-center px-4 -mb-1 border-b-2 border-transparent ">Upcoming Meals</NavLink>
//           </li>
//           { user ? <li className="flex">
//           <NavLink to= '/appliedjobs'  className="text-xl flex items-center px-4 -mb-1 border-b-2 border-transparent ">Blogs</NavLink>
//           </li> :
//           <li className="flex">
//           <NavLink to= '/about'  className="text-xl flex items-center px-4 -mb-1 border-b-2 border-transparent ">Contact Us</NavLink>
//           </li>
//           }

//           </>
//           return (
//           <div>
//           <div className="max-w-7xl mx-auto">
//           <header className=" p-4">
//           <div className="container flex justify-between h-16 mx-auto">
//           <a className="flex items-center p-2">
//           <img className="w-44" src="https://andalib.xyz/wp-content/uploads/2024/01/Yellow-and-Black-Modern-Streaming-Platform-Logo-2.png"  />
//           </a>
//           <ul className="items-stretch hidden space-x-3 lg:flex">
//           {links}
//           </ul>
//           <div className="items-center gap-2 flex-shrink-0 hidden lg:flex">

//           { user? '' : <Link to= '/login' className=" flex items-center uppercase gap-2">
//           <span className="relative flex-shrink-0 w-2 h-2 rounded-full bg-yellow-400 text-xl">
//           <span className="absolute flex-shrink-0 w-3 h-3 rounded-full -left-1 -top-1 animate-ping bg-yellow-400"></span>
//           </span>Join Us</Link> 
//           }

//         {user && (
//         <div
//           className={`dropdown dropdown-end hover:dropdown hover:dropdown-end ${isDropdownOpen ? 'open' : ''}`}
//           onMouseEnter={handleDropdownToggle}
//           onMouseLeave={handleDropdownToggle}
//         >
//           <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
//             <div className="w-10 rounded-full">
//               <img src={user.photoURL} alt="User Avatar" />
//             </div>
//           </label>
//           <ul tabIndex={0} className="mt-3 z-50 p-2 shadow menu menu-sm dropdown-content hover:dropdown-content bg-base-100 rounded-box w-52">
//             <div className="px-2 border-b pb-2">
//               <img
//                 className="h-24 w-24 rounded-full mx-auto"
//                 src={user.photoURL}
//                 alt="User Avatar"
//               />
//               <p className="pt-2 text-lg font-semibold">Hi, {user.displayName}</p>
//               <p className="text-sm text-gray-600">{user.email}</p>
//             </div>
//             <div className="mt-1">
//               <Link to="/dashboard" className="btn btn-sm bg-violet-300">
//                 Dashboard
//               </Link>
//               <button
//                 className="btn btn-sm bg-violet-300"
//               >
//                 LogOut
//               </button>
//             </div>
//           </ul>
//         </div>
//       )}
//           </div>
//           <div className="p-4 lg:hidden">
//           { user ? <div
//           className={`dropdown dropdown-end hover:dropdown hover:dropdown-end ${isDropdownOpen ? 'open' : ''}`}
//           onMouseEnter={handleDropdownToggle}
//           onMouseLeave={handleDropdownToggle}
//         >
//           <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
//             <div className="w-10 rounded-full">
//               <img src={user.photoURL} alt="User Avatar" />
//             </div>
//           </label>
//           <ul tabIndex={0} className="mt-3 z-50 p-2 shadow menu menu-sm dropdown-content hover:dropdown-content bg-base-100 rounded-box w-52">
//             <div className="px-2 border-b pb-2">
//               <img
//                 className="h-24 w-24 rounded-full mx-auto"
//                 src={user.photoURL}
//                 alt="User Avatar"
//               />
//               <p className="pt-2 text-lg font-semibold">Hi, {user.displayName}</p>
//               <p className="text-sm text-gray-600">{user.email}</p>
//             </div>
//             <div>
//               {links}
//               <Link to= '/postJob' className=" my-1 flex items-center uppercase gap-2">
//           <span className="relative flex-shrink-0 w-2 h-2 rounded-full bg-violet-400 text-xl">
//           <span className="absolute flex-shrink-0 w-3 h-3 rounded-full -left-1 -top-1 animate-ping bg-violet-400"></span>
//           </span>Post a Job</Link>
//             </div>
//             <div className="mt-1">
//               <Link to="/dashboard" className="btn btn-sm bg-violet-300">
//                 Dashboard
//               </Link>
//               <button

//                 className="btn btn-sm bg-violet-300"
//               >
//                 LogOut
//               </button>
//             </div>
//           </ul>
//         </div> :
//           <Link to= '/login' className="btn bg-violet-400 text-white">
//           Sign In
//           </Link>
//           }
//           </div>
//           </div>
//           </header>                             
//           </div>
//           <div>
//           <Outlet></Outlet>
//           </div>
//           <div>
//           <Footer></Footer>
//           </div>
//           </div>
//           );
// };

// export default Header;