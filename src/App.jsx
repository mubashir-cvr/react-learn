
import './App.css'
import { createBrowserRouter, RouterProvider, createRoutesFromElements, Route } from "react-router-dom";
import HomePage from "./component/HomePage";
import Products from "./component/Products";
// const router = createBrowserRouter([
//   { path: "/", element: <HomePage /> },
//   { path: "/products", element: < Products/> }
// ]);
const routrDefnitions = createRoutesFromElements(
  <Route>
    <Route path='/' element={<HomePage/>}/>
    <Route path='/products' element={<HomePage/>}/>
  </Route>
)
const router = createBrowserRouter(routrDefnitions);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
