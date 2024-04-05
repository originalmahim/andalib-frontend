import axios from "axios";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import Swal from "sweetalert2";

const PaymentSuccess = () => {
  const [searchParams] = useSearchParams();
  const invoiceId = searchParams.get('invoice_id');
  const [trx_id, setTrxid] = useState('');
  const [date, setDate] = useState('');
  const [PaymentMethod, setPaymentMethod] = useState('');
  const [PaymentStatus, setPaymentStatus] = useState('');
  const [dataFetched, setDataFetched] = useState(true); // New state

  useEffect(() => {
    if (dataFetched) {
      axios.post(`https://task-backend-sigma.vercel.app/verify-payment?invoice_id=${invoiceId}`)
        .then(res => {
          const data = res.data;
          console.log(data);
          console.log(data.metadata);

          const metadata = data.metadata;
          setTrxid(data?.transaction_id);
          setDate(data?.date);
          setPaymentMethod(data?.payment_method);
          setPaymentStatus(data.status);

          if (!data.orderPlaced && (data.status === 'COMPLETED' || data.status === 'PENDING')) {
            placeOrder(metadata);
          }
          setDataFetched(false); // Set flag after fetching data
        })
        .catch(error => {
          console.error('Error verifying payment:', error);
        });
    }
  }, [invoiceId, dataFetched]); // Dependency includes dataFetched

  const placeOrder = (metadata) => {
    axios.post('https://task-backend-sigma.vercel.app/orders', metadata)
      .then(res => {
        if (res.data.insertedId) {
          Swal.fire({
            icon: 'success',
            title: 'You have ordered the product successfully',
            showConfirmButton: false,
            timer: 1500
          });
        }
      })
      .catch(error => {
        console.error('Error placing order:', error);
      });
  };
    return (
        <div className="flex justify-center mx-5 lg:mt-52 mt-20 md:mt-20 mb-5">
            <div className="p-7 py-10 max-w-xl bg-white rounded-lg shadow-lg">
                <div className="flex justify-center">
                    <img className="w-24 h-24 md:w-32 md:h-32 rounded-full bg-green-100" src="https://i.ibb.co/myr3xw8/success-green-check-mark-icon.webp" alt="Success Icon" />
                </div>
                
                <h2 className="text-center text-xl md:text-2xl text-green-600 font-semibold my-5">PAYMENT {PaymentStatus ? PaymentStatus :'DEMO '}!!</h2>

                <div className="">
                    <div className="flex justify-between">
                        <h3 className="font-semibold">Invoice ID:</h3>
                        <p className="font-semibold">{invoiceId ? invoiceId :"IN123456"}</p>
                    </div>
                    <div className="flex justify-between">
                        <h3 className="font-semibold">Transaction ID: </h3>
                        <p className="font-semibold"> {trx_id ? trx_id :'DEMO1234567890'} </p>
                    </div>
                    <div className="flex justify-between">
                        <h3 className="font-semibold">Payment Method:</h3>
                        <p className="font-semibold">{PaymentMethod ? PaymentMethod : 'Demo Card'}</p>
                    </div>
                    
                    <div className="flex justify-between">
                        <h3 className="font-semibold">Date:</h3>
                        <p className="font-semibold">{date ? date :'April 4, 1900'}</p>
                    </div>
                </div>

                <p className="text-center font-semibold text-green-600 mt-4">Thank you for your payment. An automated payment receipt will be sent to your given email.</p>
            </div>
        </div>
    );
};

export default PaymentSuccess;
