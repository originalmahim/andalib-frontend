import { Outlet } from "react-router-dom";
import Footer from "./Footer";

const Header = () => {
          return (
          <div>
           <h1>This is header section</h1> 
           <Outlet></Outlet>
           <Footer></Footer>                  
          </div>
          );
};

export default Header;