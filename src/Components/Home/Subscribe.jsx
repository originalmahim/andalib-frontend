

const Subscribe = () => {
          return (
          <div>
          <div className="flex items-center justify-center mt-7 mb-7">
    <div className="w-full lg:w-2/3 mx-2 bg-[#f2f0fd] shadow-lg rounded-lg border-black border-solid p-8">
      <h1 className="text-5xl lg:text-6xl font-bold font-kodchasan text-center mb-4">
        Hi! How can we <span className="text-pink-500">help you?</span>
      </h1>
      <p className="text-center mb-6">
        Get helpful information on what’s important to you when choosing your right Doctor.
      </p>
      <div className="flex flex-col lg:flex-row items-center justify-center lg:justify-between space-y-4 lg:space-y-0 lg:space-x-2">
        <input type="text" placeholder="username@site.com" className="input input-bordered lg:w-96 w-full pr-4 mb-2 lg:mb-0" />
        <button className="btn btn-primary w-full lg:w-36 rounded-full">
          Schedule
        </button>
      </div>
    </div>
  </div>                    
          </div>
          );
};

export default Subscribe;