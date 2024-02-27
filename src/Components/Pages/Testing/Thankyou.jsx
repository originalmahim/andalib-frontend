const Thankyou = () => {
          return (
          <div>
           <div className="max-w-6xl lg:mx-auto p-6 bg-white rounded-lg shadow-lg lg:mt-48 mt-36 mb-10 mx-2">
    <h1 className="text-4xl font-bold mb-8 text-center text-indigo-700">Thank You!</h1>
    <p className="text-lg font-semibold mb-6 text-center text-gray-700">Your order has been successfully placed.</p>
    <div className="bg-gray-200 rounded-lg p-6 mb-6">
        <p className="text-lg font-semibold mb-4 text-gray-800">Order Details</p>
        <div className="grid grid-cols-2 gap-4">
            <div>
                <p className="text-gray-700"><span className="font-semibold">Order ID :</span> 797</p>
                <p className="text-gray-700"><span className="font-semibold">Date :</span> February 27, 2024</p>
            </div>
            <div>
                <p className="text-green-500 font-bold"><span className="font-semibold text-black">Payment method:</span> Cash on delivery</p>
                <p className="text-gray-700"><span className="font-semibold ">Total :</span> 1,898.00৳</p>
            </div>
        </div>
    </div>
    <div className="border-t border-gray-300">
        <div className="flex justify-between py-2">
            <p className="text-lg font-semibold text-gray-800">Product Details</p>
        </div>
        <div className="flex justify-between py-2">
            <p className="text-gray-700">Trendy Women's Tote Bag × 1</p>
            <p className="text-gray-700">1,798.00৳</p>
        </div>
        <div className="flex justify-between py-2">
            <p className="text-gray-700">Delivery charge</p>
            <p className="text-gray-700">100.00৳</p>
        </div>
        <div className="flex justify-between py-2">
            <p className="text-gray-700"></p>
            <p className="text-gray-700"></p>
        </div>
        <div className="flex justify-between ">
            <p className="text-gray-700">Total Price :</p>
            <p className="text-pink-500">1,898.00৳</p>
        </div>
    </div>
</div>
                   
          </div>
          );
};

export default Thankyou;