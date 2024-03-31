import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import Home from './Components/Home/Home';
import About from './Components/Pages/About';
import Header from './Components/Shared/Header';
import SignIn from './Components/Login/SignIn';
import SignUP from './Components/Login/SignUP';
import AuthProvider from './Components/Providers/Authprovider';
import ExchangeRefundPolicy from './Components/Pages/Exchange';
import Menu from './Components/Shop/Shop';
import TrackOrder from './Components/Pages/TrackOrder';
import Complain from './Components/Pages/Complain';
import Error from './Components/Pages/Error';
import Testing from './Components/Pages/Testing/Testing';
import { ChakraProvider } from '@chakra-ui/react';
import ProductDetails from './Components/Shop/ProductDetails';
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import Chelkout from './Components/Pages/Testing/Chelkout';
import Thankyou from './Components/Pages/Testing/Thankyou';
import PaymentSuccess from './Components/Pages/Testing/PaymentSuccess';
import PaymentCancel from './Components/Pages/Testing/PaymentCancel';

const queryClient = new QueryClient();
const router = createBrowserRouter([
  {
    path: "/",
    element: <Header></Header>,
    errorElement: <Error></Error>,
    children: [
      {
         path: '/',
         element: <Home></Home>
      },
      {
        path: '/Login',
        element: <SignIn></SignIn>
      },
      {
        path: '/register',
        element: <SignUP></SignUP>
      },
      {
        path: '/shop',
        element: <Menu></Menu> ,
      },
      {
        path: '/refund',
        element: <ExchangeRefundPolicy></ExchangeRefundPolicy>
      },
      {
        path: '/trackorder',
        element: <TrackOrder></TrackOrder>
      },
      {
        path: '/complain',
        element: <Complain></Complain>
      },
      {
        path: '/about',
        element: <About></About>
      },
      {
        path: '/bag/:id',
        element: <ProductDetails></ProductDetails>,
        loader: ({params}) => fetch(`https://task-backend-sigma.vercel.app/bags/${params.id}`)
      },
      {
        path: '/chelkout/:id',
        element: <Chelkout></Chelkout>,
        loader: ({params}) => fetch(`https://task-backend-sigma.vercel.app/bags/${params.id}`)
      },
      {
        path: '/thankyou',
        element: <Thankyou></Thankyou>
      },
      {
        path: '/Payment/Successfull',
        element: <PaymentSuccess></PaymentSuccess>
      },
      {
        path: '/Payment/Cancelled',
        element: <PaymentCancel></PaymentCancel>
      }
      
    ]
  },
  {
    path: '/test',
    element: <Testing></Testing>
  },
  
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <ChakraProvider>
        <QueryClientProvider client={queryClient} >
    <RouterProvider router={router} />
        </QueryClientProvider>
      </ChakraProvider>
    </AuthProvider>
  </React.StrictMode>,
)
