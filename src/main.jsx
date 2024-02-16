import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import Home from './Components/Home/Home';
import Header from './Components/Shared/Header';
import SignIn from './Components/Login/SignIn';
import SignUP from './Components/Login/SignUP';
import AuthProvider from './Components/Providers/Authprovider';
import ExchangeRefundPolicy from './Components/Pages/Exchange';
import Menu from './Components/Shop/Shop';
import TrackOrder from './Components/Pages/TrackOrder';
import Complain from './Components/Pages/Complain';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Header></Header>,
    errorElement: <h1>this is error</h1>,
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
      }
      
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
    <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
)
