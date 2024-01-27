
import Footer from "./Footer";
import { Link, NavLink, Outlet } from "react-router-dom";
import {  useState } from "react";
const Header = () => {

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleDropdownToggle = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

          // const {user, LogOut} = useContext(AuthContex)
          const user = false;
          // const handleLogOut = () => {
          //           LogOut()
          //           .then(() => {
          //             Swal.fire(
          //               'Loged Out',
          //               'You have loged Out successfully',
          //               'success'
          //             )
          //           })
          //         }

          const links = <>

          <li className="flex">
          <NavLink to= '/'  className="text-xl flex items-center px-4 -mb-1 border-b-2 border-transparent ">Home</NavLink>
          </li>
          <li className="flex">
          <NavLink to= '/alljobs'  className="text-xl flex items-center px-4 -mb-1 border-b-2 border-transparent ">All Meals</NavLink>
          </li>
          <li className="flex">
          <NavLink to= '/alljobs'  className="text-xl flex items-center px-4 -mb-1 border-b-2 border-transparent ">Upcoming Meals</NavLink>
          </li>
          { user ? <li className="flex">
          <NavLink to= '/appliedjobs'  className="text-xl flex items-center px-4 -mb-1 border-b-2 border-transparent ">Blogs</NavLink>
          </li> :
          <li className="flex">
          <NavLink to= '/about'  className="text-xl flex items-center px-4 -mb-1 border-b-2 border-transparent ">Contact Us</NavLink>
          </li>
          }

          </>
          return (
          <div>
          <div className="max-w-7xl mx-auto">
          <header className=" p-4">
          <div className="container flex justify-between h-16 mx-auto">
          <a className="flex items-center p-2">
          <img src="https://starbelly.windstripedesign.ro/images/ui/logo.svg"  />
          </a>
          <ul className="items-stretch hidden space-x-3 lg:flex">
          {links}
          </ul>
          <div className="items-center gap-2 flex-shrink-0 hidden lg:flex">

          { user? '' : <Link to= '/login' className=" flex items-center uppercase gap-2">
          <span className="relative flex-shrink-0 w-2 h-2 rounded-full bg-yellow-400 text-xl">
          <span className="absolute flex-shrink-0 w-3 h-3 rounded-full -left-1 -top-1 animate-ping bg-yellow-400"></span>
          </span>Join Us</Link> 
          }

        {user && (
        <div
          className={`dropdown dropdown-end hover:dropdown hover:dropdown-end ${isDropdownOpen ? 'open' : ''}`}
          onMouseEnter={handleDropdownToggle}
          onMouseLeave={handleDropdownToggle}
        >
          <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
            <div className="w-10 rounded-full">
              <img src={user.photoURL} alt="User Avatar" />
            </div>
          </label>
          <ul tabIndex={0} className="mt-3 z-50 p-2 shadow menu menu-sm dropdown-content hover:dropdown-content bg-base-100 rounded-box w-52">
            <div className="px-2 border-b pb-2">
              <img
                className="h-24 w-24 rounded-full mx-auto"
                src={user.photoURL}
                alt="User Avatar"
              />
              <p className="pt-2 text-lg font-semibold">Hi, {user.displayName}</p>
              <p className="text-sm text-gray-600">{user.email}</p>
            </div>
            <div className="mt-1">
              <Link to="/dashboard" className="btn btn-sm bg-violet-300">
                Dashboard
              </Link>
              <button
                className="btn btn-sm bg-violet-300"
              >
                LogOut
              </button>
            </div>
          </ul>
        </div>
      )}
          </div>
          <div className="p-4 lg:hidden">
          { user ? <div
          className={`dropdown dropdown-end hover:dropdown hover:dropdown-end ${isDropdownOpen ? 'open' : ''}`}
          onMouseEnter={handleDropdownToggle}
          onMouseLeave={handleDropdownToggle}
        >
          <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
            <div className="w-10 rounded-full">
              <img src={user.photoURL} alt="User Avatar" />
            </div>
          </label>
          <ul tabIndex={0} className="mt-3 z-50 p-2 shadow menu menu-sm dropdown-content hover:dropdown-content bg-base-100 rounded-box w-52">
            <div className="px-2 border-b pb-2">
              <img
                className="h-24 w-24 rounded-full mx-auto"
                src={user.photoURL}
                alt="User Avatar"
              />
              <p className="pt-2 text-lg font-semibold">Hi, {user.displayName}</p>
              <p className="text-sm text-gray-600">{user.email}</p>
            </div>
            <div>
              {links}
              <Link to= '/postJob' className=" my-1 flex items-center uppercase gap-2">
          <span className="relative flex-shrink-0 w-2 h-2 rounded-full bg-violet-400 text-xl">
          <span className="absolute flex-shrink-0 w-3 h-3 rounded-full -left-1 -top-1 animate-ping bg-violet-400"></span>
          </span>Post a Job</Link>
            </div>
            <div className="mt-1">
              <Link to="/dashboard" className="btn btn-sm bg-violet-300">
                Dashboard
              </Link>
              <button

                className="btn btn-sm bg-violet-300"
              >
                LogOut
              </button>
            </div>
          </ul>
        </div> :
          <Link to= '/login' className="btn bg-violet-400 text-white">
          Sign In
          </Link>
          }
          </div>
          </div>
          </header>                             
          </div>
          <div>
          <Outlet></Outlet>
          </div>
          <div>
          <Footer></Footer>
          </div>
          </div>
          );
};

export default Header;