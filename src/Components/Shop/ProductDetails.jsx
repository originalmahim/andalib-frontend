import { useLoaderData } from "react-router-dom";

const ProductDetails = () => {
          const product = useLoaderData();
          
          return (
                    <div className=" text-gray-900 lg:mt-48 mt-14 mb-10">
          <div className="max-w-6xl mx-auto p-4">
          <div className="lg:flex items-center justify-center gap-7">
          {/* Product Image */}
          <div className="">
          <img
          src="https://aodour.oss-ap-southeast-1.aliyuncs.com/globalProduct/2022-09-27/O1CN013aHnar1UkEhIdBGNl_!!2348622555-0-cib.jpg"
          alt="Product Image"
          className="rounded-md h-3/5"
          />
          </div>

          {/* Product Description */}
          <div className="md:order-1 mt-3">
          <p className="text-green-500"><strong>{product?.Availability}</strong> </p>
          <h1 className="lg:text-3xl text-2xlxl font-bold mb-2 ">{product?.name}</h1>
          <p className="lg:text-xl mb-2">
          Product Description Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
          aliquet dolor a libero lacinia, a laoreet justo bibendum.
          </p>
          

          {/* Product Details */}
          <div className="flex gap-5">
          <p> <strong>Price : {product?.price} Taka</strong>  </p>
          <p><strong>Total Orders: {product?.Orders}</strong></p>
          </div>
          <div className="flex gap-5">
          <p><strong>Delivery Time :  {product?.DeliveryTime}</strong> </p>
          <p><strong>Ship From : {product?.ShipFrom}</strong> </p>
          </div>

          {/* Buy Now Button */}
          <div className="flex items-center gap-4">
          <div>
          <button className="btn mt-4 text-center border-black text-black px-4 py-2 rounded-md ">
          Quick Buy Now
          </button>
          </div>
          
          </div>
          </div>
          </div>
          <div className="grid lg:grid-cols-4 grid-cols-2 gap-4 mt-8">
          <img className=" rounded-md" src="https://aodour.oss-ap-southeast-1.aliyuncs.com/product/desc/8d22c098-2cc1-435c-81ce-ef41fcc2f3f7.jpg" />
          <img className=" rounded-md" src="https://aodour.oss-ap-southeast-1.aliyuncs.com/product/desc/0c5b27f1-131f-4f1a-ab91-800fd67971cc.jpg" />
          <img className=" rounded-md" src="https://aodour.oss-ap-southeast-1.aliyuncs.com/product/desc/c4580cd2-d474-47a6-85f4-5de01c194347.jpg" />
          <img className=" rounded-md" src="https://aodour.oss-ap-southeast-1.aliyuncs.com/product/desc/a6ea91db-9947-4154-bfd8-f10efcc1b731.jpg" />
          </div>
          </div>
                </div>
          );
};

export default ProductDetails;