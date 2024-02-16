 import Bannee from "./Bannee";
import Info from "./Info";
import OurServices from "./OurServices";
import Products from "./Products";
 import Subscribe from "./subscribe";
//  import Banner from "./Banner";


const Home = () => {
          return (
          <div className="mt-14">
                    
            <Bannee></Bannee>
            {/* <Banner></Banner>  */}
            <Products></Products>
            <Info></Info>
            <Subscribe></Subscribe>
            <OurServices></OurServices>
          </div>
          );
};

export default Home;