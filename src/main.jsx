import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './components/Root/Root';
import Home from './components/Home/Home';
import Donation from './components/Dnation/Donation';
import Statistic from './components/Statistic/Statistic';
import CategoryDetails from './components/CategoryDetails/CategoryDetails';
import ErrorPage from './components/ErrorPage/ErrorPage';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root> ,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/donation",
        element: <Donation></Donation>,
        loader: ()=> fetch('/categories.json'),
      },
      {
        path: "/statistic",
        element: <Statistic></Statistic>,
      },
      {
        path:"/category/:id",
        element:<CategoryDetails></CategoryDetails>,
        loader: ()=> fetch('/categories.json'),
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>,
)
