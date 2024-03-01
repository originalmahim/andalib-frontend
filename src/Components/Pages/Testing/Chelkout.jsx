import  { useEffect, useState } from "react";
import districtsData from './../../../../public/districts.json';
import upazilasData from './../../../../public/upazilas.json';
import {  useLoaderData, useNavigate } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";

const Checkout = () => {
  const [couponCodes, setCouponCodes] = useState([]);
  const informaton = useLoaderData();
  const [selectedDistrict, setSelectedDistrict] = useState('');
  const [selectedUpazila, setSelectedUpazila] = useState('');
  const [totalPrice, setTotalPrice] = useState(0);
  const [discountedPrice, setDiscountedPrice] = useState(''); 
  const [couponApplied, setCouponApplied] = useState(false);
  const [inputCouponCode, setInputCouponCode] = useState("");
  const [cuponMessage, setCuponMessage] = useState('');
  const [fullName, setFullName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [address, setAddress] = useState('');
  const navigate = useNavigate();
  const districts = districtsData.districts;
  const upazilas = upazilasData.upazilas;

  // Function to fetch coupon codes from MongoDB
  useEffect(() => {
    fetch('https://task-backend-sigma.vercel.app/cupons')
      .then(response => response.json())
      .then(data => {
        setCouponCodes(data);
      })
      .catch(error => {
        console.error('Error fetching coupon codes:', error);
      });
  }, []);

  useEffect(() => {
    calculateTotalPrice();
  }, [selectedDistrict, selectedUpazila, informaton, couponApplied]);

  const calculateTotalPrice = () => {
    const productPrice = parseFloat(informaton?.price) || 0;
    const deliveryCharge = 100;
    const totalItems = 1;

    let totalAmount = totalItems * productPrice + deliveryCharge;
    let getDiscount = totalItems * productPrice + deliveryCharge;
    if (couponApplied && couponCodes.find(coupon => coupon.code === couponApplied)) {
      const discountPercentage = couponCodes.find(coupon => coupon.code === couponApplied).discount;
      const discountAmount = (totalAmount * discountPercentage) / 100;
      totalAmount -= discountAmount;
      const afterDiscount = getDiscount - totalAmount;
      // Set discounted price
      setDiscountedPrice(afterDiscount.toFixed(0));
    }

    setTotalPrice(totalAmount.toFixed(0));
  };

  const applyCoupon = () => {
    if (couponCodes.find(coupon => coupon.code === inputCouponCode)) {
      setCouponApplied(inputCouponCode);
      calculateTotalPrice();
      setCuponMessage("Coupon applied successfully.");
    } else {
      setCuponMessage("Invalid coupon code.");
    }
  };

  const handleConfirmOrder = () => {
    if (!fullName || !phoneNumber || !selectedDistrict || !selectedUpazila || !address ) {
      return alert("Please fill in all required fields.");
    }

    const shippingDetails = {
      fullName,
      phoneNumber,
      district: selectedDistrict,
      upazila: selectedUpazila,
      address,
      totalPrice,
      discountedPrice,

    };
    
    axios.post('https://task-backend-sigma.vercel.app/orders', shippingDetails)
      .then(res => {
        if (res.data.insertedId) {
          Swal.fire({
            icon: 'success',
            title: 'You have ordered the product successfully',
            showConfirmButton: false,
            timer: 1500
          });
          navigate('/thankyou');
        }
      })
      .catch(error => {
        console.error('Error confirming order:', error);
      });
  };

  return (
    <div className="overflow-y-hidden">
      <div className="flex justify-center items-center 2xl:container 2xl:mx-auto lg:py-16 md:py-12 py-9 px-4 md:px-6 lg:px-20 xl:px-44 ">
        <div className="flex w-full sm:w-9/12 lg:w-full flex-col lg:flex-row justify-center items-center lg:space-x-10 2xl:space-x-36 space-y-12 lg:space-y-0">
          <div className="flex w-full  flex-col justify-start items-start">
            <div>
              <p className="text-3xl lg:text-4xl font-semibold leading-7 lg:leading-9 text-gray-800">Check out</p>
            </div>
            <div className="mt-2">
              <a href="javascript:void(0)" className="text-base leading-4 underline  hover:text-gray-800 text-gray-600">
                Back to Shop
              </a>
            </div>
            <div className="mt-12">
              <p className="text-xl font-semibold leading-5 text-gray-800">Shipping Details</p>
            </div>
            <div className="mt-8 flex flex-col justify-start items-start w-full space-y-2 ">
              <input required id="fullName" value={fullName} onChange={(e) => setFullName(e.target.value)} className="px-2 focus:outline-none focus:ring-2 focus:ring-gray-500 border-b border-gray-200 leading-4 text-base  placeholder-gray-600 py-4 w-full" type="text" placeholder="আপনার সম্পুর্ন নাম লিখুন *" />
              <input type='number' required id="phoneNumber" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} className="px-2 focus:outline-none focus:ring-2 focus:ring-gray-500 border-b border-gray-200 leading-4 text-base placeholder-gray-600 py-4 w-full"  placeholder="আপনার মোবাইল নাম্বার লিখুন *" />
            </div>
            <div className="py-2 mt-2">
              <div className=" flex items-center justify-between gap-8">
                <div>
                  <label htmlFor="district" className="block font-medium">জেলা :</label>
                  <select id="district" required className="block w-full p-2 border border-gray-300 rounded" value={selectedDistrict} onChange={(e) => setSelectedDistrict(e.target.value)}>
                    <option value="">Select </option>
                    {districts.map(district => (
                      <option key={district.id} value={district.id}>{district.bn_name}</option>
                    ))}
                  </select>
                </div>
                <div className="">
                  <label htmlFor="upazila" className="block font-medium">এরিয়া/থানা :</label>
                  <select id="upazila" required className="block w-full p-2 border border-gray-300 rounded" value={selectedUpazila} onChange={(e) => setSelectedUpazila(e.target.value)} disabled={!selectedDistrict}>
                    <option value="">Select</option>
                    {upazilas.filter(upazila => upazila.district_id === selectedDistrict).map(filteredUpazila => (
                      <option key={filteredUpazila.id} value={filteredUpazila.id}>{filteredUpazila.bn_name}</option>
                    ))}
                  </select>
                </div>
              </div>
            </div>
            <input required id="address" value={address} onChange={(e) => setAddress(e.target.value)} className="px-2 focus:outline-none focus:ring-2 focus:ring-gray-500 border-b border-gray-200 leading-4 text-base placeholder-gray-600 py-4 w-full" type="text" placeholder="আপনার সম্পুর্ন ঠিকানা লিখুন *" />
            {/* Payment Options */}
            <div className="mt-4">
              <p className="text-lg font-medium text-gray-800 mb-2">Payment Option:</p>
              <div className="lg:flex items-center justify-center lg:space-x-4">
                {/* Cash on Delivery */}
                <div className="flex items-center">
                  <label  className="ml-2 cursor-pointer">Cash on Delivery</label>
                </div>
                
              </div>
            </div>
            <button  disabled={!fullName || !phoneNumber || !selectedDistrict || !selectedUpazila || !address}  onClick={handleConfirmOrder} className="focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 mt-8 text-base font-medium text-center  focus:ring-ocus:ring-gray-800 leading-4 hover:bg-black py-4 w-full md:w-4/12 lg:w-full text-white bg-gray-800 disabled:bg-red-600" >
              Confirm Order
            </button>
          </div>
          <div className="flex flex-col justify-start items-start bg-gray-50 w-full p-6 md:p-14">
            <div>
              <h1 className="text-2xl font-semibold leading-6 text-gray-800">Order Summary</h1>
            </div>
            <div className="flex mt-7 flex-col items-end w-full space-y-6">
              <div className="flex items-center w-full space-x-4">
                <img src="https://aodour.oss-ap-southeast-1.aliyuncs.com/globalProduct/2022-09-27/O1CN013aHnar1UkEhIdBGNl_!!2348622555-0-cib.jpg" alt="Product Image" className="w-16 h-16 object-cover rounded-md" />
                <div>
                  <p className="text-lg font-semibold leading-4 text-gray-800">{informaton?.name} x 1 </p>
                </div>
              </div>
              <div className="flex justify-between w-full items-center">
                <p className="text-lg leading-4 text-gray-600">Product Price</p>
                <p className="text-lg font-semibold leading-4 text-gray-600">{informaton?.price}</p>
              </div>
              <div className="flex justify-between w-full items-center">
                <p className="text-lg leading-4 text-gray-600">Delivery Charge</p>
                <p className="text-lg font-semibold leading-4 text-gray-600">100</p>
              </div>
              <div className="flex justify-between w-full items-center mt-3">
                <p className="text-xl font-semibold leading-4 text-gray-800">Total Amount </p>
                <p className="text-lg font-semibold leading-4 text-gray-800">{totalPrice}</p>
              </div>
              {/* Display discounted amount */}
              {discountedPrice  && (
                <div className="flex justify-between w-full items-center mt-3">
                  <p className="text-xl font-semibold leading-4 text-gray-800">Discounted Amount </p>
                  <p className="text-lg font-semibold leading-4 text-gray-800">{discountedPrice}</p>
                </div>
              )}
            </div>
            <div className=" mt-4 w-full items-center">
              <p className=" font-bold mb-2">Have a Coupon Code?</p>
              <div className="flex items-center justify-between">
                <input type="text" placeholder="Enter Coupon Code" className="border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:border-blue-500" value={inputCouponCode} onChange={(e) => setInputCouponCode(e.target.value)} />
                <button onClick={applyCoupon} className="bg-blue-500 text-white px-4 py-2 rounded-md">Apply</button>
              </div>
              { cuponMessage && <div className=" bg-yellow-200 text-center w-52 mt-2 p-1 rounded-lg">
                <p>{cuponMessage}</p>
              </div>}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;

