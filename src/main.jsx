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
      
    ]
  },
  {
    path: '/test',
    element: <Testing></Testing>
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <ChakraProvider>
    <RouterProvider router={router} />
      </ChakraProvider>
    </AuthProvider>
  </React.StrictMode>,
)
