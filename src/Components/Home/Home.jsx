 import Bannee from "./Bannee";
import Info from "./Info";
import Products from "./Products";
 import Subscribe from "./subscribe";
//  import Banner from "./Banner";


const Home = () => {
          return (
          <div>
                    
            <Bannee></Bannee>
            {/* <Banner></Banner>  */}
            <Products></Products>
            <Info></Info>
            <Subscribe></Subscribe>
          </div>
          );
};

export default Home;