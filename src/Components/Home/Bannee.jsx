import { FaArrowRight } from "react-icons/fa";
const Bannee = () => {
          return (
           <div className="bg-gradient-to-r from-[#FAFAFA] from-0% to-[#FCFCFC] to-100%">
          <div className=" max-w-7xl  mx-auto  ">
           <div className='py-24 lg:flex md:flex  md:flex-row-reverse  justify-between items-center gap-8'>
           <div className='md:w-1/2 space-y-7 px-4'>
           <h2 className='md:text-5xl text-3xl font-bold md:leading-snug leading-snug  '>Discover Fashion <br/>   
           That  <span className=' text-sky-400'>Defines You</span></h2>
          <p className='lg:text-xl text-[#4A4A4A]'>Where Each Plate Weaves a Story of <br/> Culinary Mastery and Passionate </p>
           <button className='btn shadow-md bg-violet-500 px-8 py-3 font-semibold  text-white rounded-full items-center justify-center'>Shop Now <FaArrowRight className="text-md" /> </button>
           </div>
           {/* images */}
           <div className='md:w-1/2'>
                    <img className="" src="https://andalib.xyz/wp-content/uploads/2024/01/replicate-prediction-2uvfdldbq6oawzvhz2ypv3mcly-1024x825.png" alt="" />
                    <div className="flex items-center justify-center gap-4">
                    <div className="flex -mt-4 lg:w-52 w-44 shadow-md bg-white gap-2 p-2 rounded-md items-center justify-center">

                    <div>
                    <img className=" rounded-md w-12" src="https://aodour.oss-ap-southeast-1.aliyuncs.com/banner/2023-12-22/4d7cc94b-9f8c-49fe-9eee-b759ea54b1a4.jpg" alt="" />
                    </div>
                    <div>
                    <h5 className=" font-medium">Treandy Bags</h5>
                    <div className="rating rating-sm">
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-sky-400" />
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-sky-400"  />
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-sky-400" />
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-sky-400" checked />
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-sky-400" />
</div>
                    </div>
                    
                    </div>
                    <div className="flex -mt-4 lg:w-52 w-44 shadow-md bg-white gap-2 p-2 rounded-md items-center justify-center">

                    <div>
                    <img className=" rounded-md w-12" src="https://aodour.oss-ap-southeast-1.aliyuncs.com/banner/2023-12-22/4d7cc94b-9f8c-49fe-9eee-b759ea54b1a4.jpg" alt="" />
                    </div>
                    <div>
                    <h5 className=" font-medium">Fashion Bags</h5>
                    <div className="rating rating-sm">
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-violet-400" />
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-violet-400" />
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-violet-400" />
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-violet-400" checked />
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-violet-400" />
</div>
                    </div>
                    
                    </div>

                    </div>
           </div>
           </div>                    
          </div>
           </div>         
          );
};

export default Bannee;

