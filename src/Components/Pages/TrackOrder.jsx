

const TrackOrder = () => {
    return (
        <div className="max-w-6xl mx-auto px-4 mt-40 mb-10">
            <h1 className="text-2xl font-bold mb-4">Track My Order</h1>
            <div className="mb-4 flex flex-col md:flex-row items-center">
                <input type="text" placeholder="Enter Order Number / Contact Number" className="w-full md:w-3/4 border border-gray-300 rounded-l px-4 py-2 mb-2 md:mb-0" />
                <button className="w-full md:w-auto bg-blue-500 text-white px-4 py-2 rounded-r">Search</button>
            </div>
            <div className="shadow overflow-x-auto sm:rounded-lg mb-4">
                <table className="max-w-full w-full overflow-auto divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                        <tr>
                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Order No.</th>
                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Amount</th>
                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Order Date</th>
                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Phone No.</th>
                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Ship from</th>
                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                        </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                        {/* Table rows will be dynamically populated based on search results */}
                    </tbody>
                </table>
            </div>
            <div className="text-gray-600">
                <p className="mb-4 text-lg">You can track the status of your order online at Andalib. Enter your order number / contact number to check the status of your most recent order and your order history. Click on the order number for the shipment that you would like to track and a detailed order information page will be displayed. Click on order number to view detailed tracking information. You can review the tracking history and the estimated date of delivery. Please estimate 7 - 10 business days from the time your order has been placed.</p>
                <p className="font-bold mb-2 text-pink-400">ORDER STATUSES:</p>
                <ul className="list-disc list-inside mb-4 text-lg">
                    <li>Cancelled - Your Order has been cancelled due to some reason.</li>
                    <li>Order Placed - Your order is placed successfully and our Customer Service will do the confirmation within 24 hours of order placement.</li>
                    <li>Order Confirmed - Your order is now confirmed and our warehouse is preparing your order for shipping</li>
                </ul>
                <p className="font-bold mb-2 text-pink-400">HOW TO REGISTER COMPLAINT:</p>
                <ol className="list-decimal list-inside mb-4 text-lg">
                    <li>Enter your Order number / Contact no / Tracking No. of delivered parcel in “Order Tracking”</li>
                    <li>Select the order you want to complaint against by clicking “complaint button”</li>
                    <li>Select the complaint type (Damaged Product, Incomplete Order, need to exchange, want to return)</li>
                    <li>Select the relevant products against which you want to submit complaint</li>
                    <li>Select Reason of relevant complaint type from drop down box</li>
                    <li>Enter the complaint notes in the text box</li>
                    <li>Upload the attachment of relevant evidence against which complaint has to be submitted (Invoice, Product image, box image etc.)</li>
                    <li>Click on submit complaint in order to receive your Complaint no. for further tracking</li>
                    <li>Once submitted our agent will contact you in 24 working hours to verify your complaint for further process</li>
                </ol>
            </div>
        </div>
    );
};

export default TrackOrder;
