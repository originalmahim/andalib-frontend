import { useContext } from "react";
import { useState } from "react";
import { AuthContex } from "../../Providers/Authprovider";
import axios from "axios";

const PaymentInfo = ({ planName }) => {
  const { user } = useContext(AuthContex);
  const [payOption, setPayOption] = useState("");
  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      const payInfo = {
        name: user?.displayName,
        email: user?.email,
        planName,
        currency: "BDT",
      };
      if (payOption === "sslcommarz") {
        console.log("sslcommaarz");

        const res = await axios.post("/sslPayment", payInfo);
//         router.push(res.data.url);
//         console.log(res.data.url);
      } 
      else if (payOption === "uddoktapay") {
        console.log("uddoktapay");
        const res = await axios.post("/uddoktapay", payInfo);
//         router.push(res.data.payment_url);
//         console.log(res.data.payment_url);
      }
       else {
//         toast.error("please select payment option");
      }
    } catch (error) {
      console.log(error);
    }
  };

  
  return (
    <div>

      <form onSubmit={handleSubmit} className="max-w-sm mx-auto">
        <div>
          <h3 className="mb-5 text-lg font-medium text-gray-900 dark:text-white">
            Please Select your prefer payment options
          </h3>
          <>
            <ul className="grid w-full gap-6 md:grid-cols-2">
              <li>
                <input
                  type="radio"
                  id="sslcommarz"
                  name="paymentOption"
                  defaultValue="sslcommarz"
                  className="hidden peer"
                  onChange={(e) => setPayOption(e.target.value)}
                  required=""
                />
                <label
                  htmlFor="sslcommarz"
                  className="inline-flex items-center justify-between w-full p-5 text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-green-600 peer-checked:text-green-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700"
                >
                  <div className="block">
                    <div className="w-full text-lg font-semibold">SSL</div>
                  </div>
                  <svg
                    className="w-5 h-5 ms-3 rtl:rotate-180"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 10"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M1 5h12m0 0L9 1m4 4L9 9"
                    />
                  </svg>
                </label>
              </li>
              <li>
                <input
                  type="radio"
                  id="uddoktapay"
                  name="paymentOption"
                  defaultValue="uddoktapay"
                  className="hidden peer"
                  onChange={(e) => setPayOption(e.target.value)}
                  required=""
                />
                <label
                  htmlFor="uddoktapay"
                  className="inline-flex items-center justify-between w-full p-5 text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-green-600 peer-checked:text-green-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700"
                >
                  <div className="block">
                    <div className="w-full text-lg font-semibold">Uddokta Pay</div>
                  </div>
                  <svg
                    className="w-5 h-5 ms-3 rtl:rotate-180"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 10"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M1 5h12m0 0L9 1m4 4L9 9"
                    />
                  </svg>
                </label>
              </li>
            </ul>
          </>
        </div>
        <button
          type="submit"
          className="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm w-full  px-5 py-2.5 text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
        >
          Submit
        </button>
      </form>
    </div>
  );
};
export default PaymentInfo;
