
import './App.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./component/HomePage";
import Products from "./component/Products";
import RootLayout from './component/common_layouts/RootLayout';
import Error from './component/common_layouts/Error';
import ProductDetails from './component/ProductDetails';
const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    errorElement:<Error/>,
    children: [
      { index:true, element: <HomePage /> },
      { path: "products", element: < Products /> },
      { path: "products/:productID", element: < ProductDetails /> }

    ]

  },

]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
