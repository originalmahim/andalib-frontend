

const Complain = () => {
          return (
          <div>
          <div className="max-w-6xl mx-auto px-4 py-8 lg:mt-40 mt-20 mb-6 lg:px-0">
    <h1 className="lg:text-3xl text-xl font-semibold text-center mb-4">Welcome to Andalibs Complaint Page</h1>
    <form className="max-w-6xl mx-auto bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <div className="mb-4">
            <label className="block text-gray-700 text-lg font-bold mb-2" htmlFor="search">
                Search for your Order
            </label>
            <input className="shadow appearance-none border rounded lg:w-10/12 w-3/5 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="search" type="text" placeholder="Enter Order ID / Phone Number" />
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline ml-2" type="button">
                Search
            </button>
        </div>
        <p className="text-lg font-semibold text-black-600 mb-6">Please make sure to provide relevant details and follow the instructions below to process your complaint efficiently.</p>
        <h2 className="text-lg font-semibold mb-4 text-pink-400">Terms & Conditions For Complaint</h2>
        <ul className="list-disc pl-5 mb-6 text-xl">
            <li>Provide relevant/complete details regarding complaint.</li>
            <li>Upload/Attach Clear invoice picture & Product Pictures according to the issue.</li>
            <li>Choose the relevant complaint tab and mention proper descriptions.</li>
            <li>Complaint time is 1 day after order received, please follow the timeline.</li>
            <li>Concern person will contact you within 24 working hours.</li>
            <li>Avoid sending unnecessary/multiple complaints before guided timeline.</li>
        </ul>
        <div className="flex items-center justify-between">
            <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
                Submit Complaint
            </button>
        </div>
    </form>
</div>
                    
          </div>
          );
};

export default Complain;