import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import About from './components/About';
import Error from './components/Error';
// import Cart from './components/Cart';
import EcommerceInfo from './components/EcommerceInfo';
import MyOrders from './components/MyOrders';
import BodyComponent from './components/Body';
import { createBrowserRouter,RouterProvider } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));

const appRouter=createBrowserRouter([
  {
    path:"/",
    element:<App/>,
    errorElement:<Error/>,
    children:[
      {
        path: "/",
        element: <BodyComponent />,
      },
      {
        path: "/About",
        element: <About />,
      },
      // {
      //   path: "/Cart",
      //   element: <Cart/>,
      // },
      {
        path: "/MyOrders",
        element: <MyOrders/>,
      },
      {
        path:"/ecommerce/:ecommerceId",
        element:<EcommerceInfo/>,
      }
    ],
  },
]);





root.render(<RouterProvider router={appRouter}></RouterProvider>);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
