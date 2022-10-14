import React, { createContext, useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from "./Layout/Main"
import Shop from './componants/Shop/Mainshop/Shop';
import MainHome from './componants/Home/MainHome/MainHome';
import Order from './componants/Order.jsx/Order';
import { Loader } from './Loader/Loader';
import Inventory from './componants/Inventory/Inventory';
import NotFound from './componants/NotFound/NotFound';
import Login from './Firebase/Login';
import Register from './Firebase/Register';

export const userContex = createContext()


const App = () => {
  const [dataContex, setdataContex] = useState({})
  // console.log(dataContex);

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
        {
          index: "/",
          element: <MainHome />,
        },
        {
          path: "/shop",
          loader: Loader,
          element: <Shop />
        },
        {
          path: "/order",
          element: <Order />,
          loader: Loader
        },
        {
          path: "/inventory",
          element: <Inventory />,
          loader: Loader
        },
        {
          path: "/login",
          element: <Login />,
          loader: Loader
        },
        {
          path: "/register",
          element: <Register />,
          loader: Loader
        }

      ]

    }
  ])



  return (
    <div >
      <userContex.Provider value={[dataContex, setdataContex]}>
        <RouterProvider router={route} />
      </userContex.Provider>
    </div >
  );
};

export default App;
