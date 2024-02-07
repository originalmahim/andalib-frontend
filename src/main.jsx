import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import Home from './Components/Home/Home';
import Header from './Components/Shared/Header';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Header></Header>,
    errorElement: <h1>this is error</h1>,
    children: [
      {
         path: '/',
         element: <Home></Home>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
