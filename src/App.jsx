import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./component/HomePage";
import Products from "./component/Products";
import RootLayout from "./component/common_layouts/RootLayout";
import Error from "./component/common_layouts/Error";
import ProductDetails from "./component/ProductDetails";
import ProductRootLayout from "./component/common_layouts/ProductRootLayout";
import EditProduct from "./component/EditProduct";
import NewProduct from "./component/NewProduct";
const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    errorElement:<Error/>,
    children: [
      { index:true, element: <HomePage /> },
      {
        path: "products",
        element: <ProductRootLayout />,
        children: [
          { index:true, element: <Products /> },
          { path: ":productID", element: <ProductDetails /> },
          { path: ":productID/edit", element: <EditProduct /> },
          { path: "new", element: <NewProduct /> },
        ],
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
