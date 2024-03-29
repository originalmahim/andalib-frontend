import  { useState } from "react";
import { FaHeart } from "react-icons/fa";
import { Link } from "react-router-dom";

const Cards = ({ item }) => {
  // console.log(item)
  const [isHeartFilled, setIsHeartFilled] = useState(false);

  const handleHeartClick = () => {
    setIsHeartFilled(!isHeartFilled);
  };
  return (
    <div to={`/bag/${item?._id}`}  className="card shadow-xl relative mr-5 md:my-5">
      <div
        className={`rating gap-1 absolute right-2 top-2 p-4 heartStar bg-violet-500 ${
          isHeartFilled ? "text-rose-500" : "text-white"
        }`}
        onClick={handleHeartClick}
      >
        <FaHeart className="w-5 h-5 cursor-pointer" />
      </div>
      <Link to={`/bag/${item._id}`}>
        <figure>
          <img src={item.image} alt="Bag" className="hover:scale-105 transition-all duration-300 md:h-72" />
        </figure>
      </Link>
      <div className="card-body">
       <Link to={`/bag/${item._id}`}><h2 className="card-title">{item.name}</h2></Link>
        <div className="card-actions justify-between items-center mt-2">
          <h2 className="font-semibold text-xl ">
            <span className="text-3xl text-red-500 font-bold">৳ </span> {item.price}
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Cards;
