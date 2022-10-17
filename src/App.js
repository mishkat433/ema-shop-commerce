import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from "./Layout/Main"
import Shop from './componants/Shop/Mainshop/Shop';
import MainHome from './componants/Home/MainHome/MainHome';
import { Loader } from './Loader/Loader';
import Order from "./componants/Order/Order"
import Inventory from './componants/Inventory/Inventory';
import NotFound from './componants/NotFound/NotFound';
import Login from './Firebase/Login';
import Register from './Firebase/Register';
import Contex from './Contex/Contex';
import PrivateRoute from './componants/PrivateRoute/PrivateRoute';
import Shipping from './componants/Shipping/Shipping';



const App = () => {

  useEffect(() => {
    AOS.init()
    AOS.refresh()
  }, [])

  const route = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      errorElement: <NotFound></NotFound>,
      children: [
        { index: "/", element: <MainHome /> },
        { path: "/shop", loader: Loader, element: <Shop /> },
        {
          path: "/order",
          element: <Order />,
          loader: Loader
        },
        {
          path: "/inventory",
          element: <PrivateRoute><Inventory /></PrivateRoute>,
        },
        {
          path: "/login",
          element: <Login />,
        },
        {
          path: "/register",
          element: <Register />,
        },
        {
          path: "/shipping",
          loader: Loader,
          element: <PrivateRoute><Shipping /> </PrivateRoute>,
        }
      ]
    }
  ])


  return (
    <div >
      <Contex>
        <RouterProvider router={route} />
      </Contex>
    </div >
  );
};

export default App;
