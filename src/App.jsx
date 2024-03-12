
import './App.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./component/HomePage";
import Products from "./component/Products";
import RootLayout from './component/common_layouts/RootLayout';
const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      { path: "/", element: <HomePage /> },
      { path: "/products", element: < Products /> }

    ]

  },

]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
