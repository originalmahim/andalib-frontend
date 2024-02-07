
import { AiFillFacebook } from "react-icons/ai";
import { GrGroup } from "react-icons/gr";
const Subscribe = () => {
          return (
          <div className=" max-w-6xl mx-auto">
          <div className="lg:flex md:flex items-center justify-center mt-7 mb-7 gap-10">
    <div className="bg-gradient-to-r from-[#FAFAFA] from-0% to-[#FCFCFC] to-100% shadow-lg rounded-lg border-black border-solid p-4">
      <div className="flex items-center justify-center gap-2">
      <div>
      <AiFillFacebook className="text-7xl text-pink-400"></AiFillFacebook>
      </div>
      <div>
      <h1 className="text-lg lg:text-xl font-bold font-kodchasan">
      আমাদের পেইজে লাইক দিন
      </h1>
      <button className="btn-sm rounded-md bg-violet-500 text-white">লাইক দিন</button>
      </div>
      </div>
    </div>
    <div className="hidden lg:grid md:grid bg-gradient-to-r from-[#FAFAFA] from-0% to-[#FCFCFC] to-100% shadow-lg rounded-lg border-black border-solid p-4">
      <div className="flex items-center justify-center gap-2">
      <div className=" bg-pink-400 p-2 rounded-md">
      <GrGroup className="text-5xl text-white"></GrGroup>
      </div>
      <div>
      <h1 className="text-lg lg:text-xl font-bold font-kodchasan">
      আন্দালিব গ্রুপে জয়েন করুন
      </h1>
      <button className="btn-sm rounded-md bg-violet-500 text-white">জয়েন করুন</button>
      </div>
      </div>
    </div>
    
  </div>                    
          </div>
          );
};

export default Subscribe;