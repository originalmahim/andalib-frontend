const serviceLists = [
          {id:1, title: "Catering", des: "Delight your guests with our flavors and  presentation", img: "/src/assets/salad.png"},
          {id:2, title: "Fast delivery", des: "We deliver your order promptly to your door", img: "/src/assets/time.png"},
          {id:3, title: "Online Ordering", des: "Explore menu & order with ease using our Online Ordering n", img: "/src/assets/delibary.png"},
          {id:4, title: "Gift Cards", des: "Give the gift of exceptional dining with Foodi Gift Cards", img: "/src/assets/gift.png"},
      ]
      
      const OurServices = () => {
        return (
          <div className="max-w-7xl mx-auto my-16">
            <div className="flex flex-col md:flex-row items-center justify-between gap-12">
              <div className="md:w-1/2">
                <div className="lg:text-left text-center m-4 md:w-4/5">
                  
                  <h2 className="lg:text-4xl text-3xl font-bold">Our Offers <br /> And Services</h2>
                  <p className="my-2 text-lg leading-[30px]">
                  Our commitment to customer satisfaction is unmatched.
                  </p>
      
                  <button className="hidden lg:flex md:flex bg-pink-400 font-semibold btn text-white px-8 py-3 rounded-full">
                    Explore
                  </button>
                </div>
              </div>
              <div className="md:w-1/2 mx-8">
                  <div className="grid grid-cols-2  lg:gap-8 gap-4 items-center">
                      {
                          serviceLists.map((service) => (
                              <div key={service.id} className="shadow-md rounded-sm py-5 px-4 text-center space-y-2 text-green cursor-pointer hover:border hover:border-indigo-600 transition-all duration-200">
                                  <img src={service.img} alt="" className=" mx-auto"/>
                                  <h5 className="pt-3 font-semibold"> {service.title}</h5>
                                  <p className="text-[#90BD95]">{service.des}</p>
                              </div>
                          ))
                      }
                  </div>
              </div>
            </div>
          </div>
        );
      };
      
      export default OurServices;