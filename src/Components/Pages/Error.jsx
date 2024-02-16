import { Link } from "react-router-dom";

const Error = () => {
  return (
      <div className="bg-gradient-to-r from-[#FAFAFA] from-0% to-[#FCFCFC] to-100%">
    <div className="flex items-center justify-center min-h-screen p-8 bg-gray-100 dark:bg-gray-900 dark:text-gray-100">
      <div className="container flex flex-col items-center justify-center mx-auto space-y-8">
        <h2 className="text-5xl font-extrabold text-red-600 dark:text-red-400">Error 404</h2>
        <p className="text-lg md:text-xl text-center">
          Oops! Looks like you've wandered off the beaten path.
        </p>
        <p className="text-lg md:text-xl text-center">
          But fret not! You can always head back to familiar territory.
        </p>
        <Link
          to="/"
          className="px-6 py-3 text-lg font-semibold text-white transition duration-300 bg-blue-500 rounded-md hover:bg-blue-600 dark:bg-violet-500 dark:hover:bg-violet-600"
        >
          Back to Homepage
        </Link>
      </div>
    </div>
      </div>    
  );
};

export default Error;
