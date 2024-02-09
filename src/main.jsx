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
