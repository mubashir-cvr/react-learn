
import './App.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./component/HomePage";
import Products from "./component/Products";
const router = createBrowserRouter([
  { path: "/", element: <HomePage /> },
  { path: "/products", element: < Products/> }
]);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
