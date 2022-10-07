import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from "./Layout/Main"
import Shop from './componants/Shop/Mainshop/Shop';
import MainHome from './componants/Home/MainHome/MainHome';
// import NotFound from './componants/NotFound/NotFound';
import Order from './componants/Order.jsx/Order';
import { Loader } from './Loader/Loader';

const App = () => {

  useEffect(() => {
    AOS.init()
    AOS.refresh()
  }, [])

  const route = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
          index: "/",
          element: <MainHome />

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

      ]

    }
  ])

  return (
    <div >
      <RouterProvider router={route} />
    </div >
  );
};

export default App;
