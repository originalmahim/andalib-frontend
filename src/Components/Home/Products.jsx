import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { FaBangladeshiTakaSign } from "react-icons/fa6";
import { MdOutlineNavigateNext } from "react-icons/md";
import { GrFormPrevious } from "react-icons/gr";
const simpleNextArrow = (props) => {
          const { className, style, onClick} = props;
          return (
          <div>
          className={className}
          style={{...style, display: "block", background: "red" }}
          onClick={onClick}
          ❯
          NEXT
          </div>
          );
          };
const simplePrevArrow = (props) => {
          const { className, style, onClick} = props;
          return (
          <div>
          className={className}
          style={{...style, display: "block", background: "green" }}
          onClick={onClick}
          ❮
          Back
          </div>
          );      
}
const Products = () => {
          const [bags, setBags] = useState([]);
          const slider = useRef(null)
          useEffect( () => {
          fetch('/bags.json')
          .then((res) => res.json())
          .then(data => {
          console.log(data);
          setBags(data)
          })
          },[])
          const settings = {
                    dots: false,
                    infinite: false,
                    speed: 500,
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    initialSlide: 0,
                    responsive: [
                      {
                        breakpoint: 1120,
                        settings: {
                          slidesToShow: 3,
                          slidesToScroll: 3,
                          infinite: true,
                          dots: false
                        }
                      },
                      {
                        breakpoint: 1024,
                        settings: {
                          slidesToShow: 2,
                          slidesToScroll: 2,
                          initialSlide: 2
                        }
                      },
                      {
                        breakpoint: 480,
                        settings: {
                          slidesToShow: 1,
                          slidesToScroll: 1
                        }
                      }
                    ],
                    nextArrow : <simpleNextArrow></simpleNextArrow>,
                    preArrow : <simplePrevArrow></simplePrevArrow>
                  };
          return (
          <div className='max-w-6xl mt-4 mx-auto my-20'>
          <div className="max-w-5xl mx-auto flex items-center justify-between my-5" >
          <div className="justify-center items-center ml-10 lg:ml-0 my-10">
                  
        <h1 className=" text-4xl mb-1 font-bold font-kodchasan">Trendy <span className="text-violet-500"> Collections</span></h1>
        <div className="w-24 h-3">
          <hr className="border-pink-500 border-4 rounded-full" />
        </div>
      </div>
          <div className="hidden lg:flex md:flex items-center justify-center">
          <button onClick={() => slider?.current?.slickPrev()} className="btn  bg-pink-500 rounded-full ml-5"><GrFormPrevious className="text-2xl text-white"></GrFormPrevious></button>
          <button onClick={() => slider?.current?.slickNext()} className="btn  bg-violet-500 rounded-full ml-5" ><MdOutlineNavigateNext className="text-2xl text-white"></MdOutlineNavigateNext></button>
          </div>
                    </div>
          <Slider ref={slider} {...settings} className=" overflow-hidden mt-4 ml-6  ">
          {bags.map((item, i) => (
          <div key={i}>
                    <div className="lg:w-80 md:w-80 w-[360px] items-center justify-center bg-white border border-gray-200 rounded-lg shadow">

          <img className="p-4 rounded-lg w-full h-auto" src={item?.image}  />
          <div className="px-5 pb-5">

          <h5 className="text-xl font-semibold tracking-tight text-gray-900 ">{item?.bagName}</h5>
          <div className="flex items-center justify-between">
          <span className="text-2xl flex items-center gap-1 font-semibold text-gray-900 "><FaBangladeshiTakaSign className="text-xl"></FaBangladeshiTakaSign>{item?.price}</span>
          <Link to={`meal/${item?._id}`} className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center ">Details</Link>
          </div>
          </div>
          </div>
          </div>
          
          ))}

          </Slider>
          <div className=" my-5 lg:hidden md:hidden items-center text-center">
          <button onClick={() => slider?.current?.slickPrev()} className="btn  bg-pink-500 rounded-full ml-5"><GrFormPrevious className="text-2xl text-white"></GrFormPrevious></button>
          <button onClick={() => slider?.current?.slickNext()} className="btn  bg-violet-500 rounded-full ml-5" ><MdOutlineNavigateNext className="text-2xl text-white"></MdOutlineNavigateNext></button>
          </div>
          </div>
          );
};

export default Products;