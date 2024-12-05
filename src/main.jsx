import { createRoot } from 'react-dom/client'
import ProductListing from './pages/ProductListing'
import ProductDetails from './pages/ProductDetails'
import Root from './routes/root'
import ErrorPage from "./error-page";


import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root/>,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <ProductListing />,
      },
      {
        path: "/product-details/:productId",
        element: <ProductDetails/>,
      },
    ],
  },
]);


createRoot(document.getElementById('root')).render(
  <>
    <RouterProvider router={router} />
  </>
    ,
)    