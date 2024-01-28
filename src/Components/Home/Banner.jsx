// import { useContext } from "react";
import { Link } from "react-router-dom";
const Banner = () => {
          return (
            <div>
            <div className="carousel w-full mt-20 lg:h-[800px] md:h-[500px] h-[220px]">
            <div
            id="slide1"
            className="carousel-item relative w-full"
            style={{
            backgroundImage: `url('https://i.ibb.co/FJ5TKGq/slide-h6-2.jpg')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            }}
            >
            <div data-aos="fade-right" className="text-black lg:ml-44 md:ml-6 lg:mt-60 -mt-10 md:mt-20 p-20 lg:p-0">
            <h1 className=" font-medium lg:font-bold lg:text-7xl md:text-4xl text-xl ">Discover Fashion <br /> That Defines You <br /></h1>
            <p className="my-4 text-xl hidden lg:flex">Crafting unforgettable moments to capture the essence of your love story <br /> and curating a unique, cherished experience for you and your guests, <br /> ensuring your big day is a lasting memory filled with love and joy.</p>
             <Link to = "/register">
            <button className="text-white lg:btn lg:mt-0 mt-2 btn-sm bg-violet-500 md:mt-4  
            border-none hover:bg-white">Shop Now</button>
            </Link>
            </div>
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide1" className="btn btn-circle bg-transparent">
            ❮
            </a>
            <a href="#slide1" className="btn btn-circle bg-transparent">
            ❯
            </a>
            </div>
            </div>
            <div
            id="slide2"
            className="carousel-item relative w-full"
            style={{
            backgroundImage: `url('https://kling-theme.myshopify.com/cdn/shop/files/cont-section-image1.jpg?v=1614338440')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            }}
            ><div data-aos="fade-right" className="text-white lg:ml-44 md:text-4xl md:ml-6  md:mt-20 -mt-10 lg:mt-60 p-20 lg:p-0">
            <h1 className="hidden lg:flex md:flex lg:font-bold lg:text-6xl md:text-3xl "></h1>
            <h1 className=" lg:hidden md:hidden lg:font-bold lg:text-6xl md:text-3xl "></h1>
            <p className="my-4 text-xl hidden  lg:flex"></p>
            {/* { user ? <Link to = "/booking">
            <button className="lg:btn md:btn p-1 bg-white md:mt-8 text-black 
            border-none hover:bg-white"></button>
            </Link>  : <Link to = "/register">
            <button className="btn bg-white text-black 
            border-none hover:bg-white"></button>
            </Link>} */}
            </div>
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide1" className="btn btn-circle">
            ❮
            </a>
            <a href="#slide3" className="btn btn-circle">
            ❯
            </a>
            </div>
            </div>
            <div
            id="slide3"
            className="carousel-item relative w-full"
            style={{
            backgroundImage: `url('https://purse-store-demo.myshopify.com/cdn/shop/articles/blog5_d2941253-3593-4cb4-b697-60f6a43d0571_1024x1024.png?v=1628827851')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            }}
            >
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide2" className="btn btn-circle">
            ❮
            </a>
            <a href="#slide1" className="btn btn-circle">
            ❯
            </a>
            </div>
            </div>
            </div>
            </div>
          );
        };
        
        export default Banner;