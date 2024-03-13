# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Start Project 

```
npm create vite@latest
```

## Router

```
npm i react-router-dom  
or
npm install react-router-dom

```
### Route Sample

```
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

```

### Root Layout 
#### Common Lay out (Navigation bar Purpose)

#### `App.jsx`

```jsx
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
```

#### `RootLayout.jsx`

```jsx
function RootLayout() {
  return (
    <>
      <h4>RootLayout <i>(Add navigation here)</i></h4>
      <Outlet />
    </>
  );
}

```

### ErrorElement in Route

#### `App.jsx`

```jsx
const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    errorElement:<Error/>,
    children: [
      { path: "/", element: <HomePage /> },
      { path: "/products", element: < Products /> }

    ]

  },

]);
```

### Link Element

```jsx
    <Link to="/">Home</Link>
```

### NavLink 

```jsx
  <NavLink to="/" className={({isActive})=> isActive? 'active':undefined} end>Home</NavLink>
  // isActive will hold  true or false based on click 
  // end mentioned here since we have nested rout for '/'
  <NavLink to="/products" className={({isActive})=> isActive? 'active': undefined}>Products</NavLink>


```



### Link to = ".." 

```jsx
   <Link to=".." >Back</Link>
   <Link to=".." relative="path" >Back</Link>
   //First one will back to the route (Home Page)
   //Second one will just remove current route to very previous [age]


```

### Loader 

#### `App.jsx`
```jsx
import Products,{loader as prodectLoader} from "./component/Products";
.....
.....

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
          { index:true, element: <Products /> ,loader:prodectLoader},
          { path: ":productID", element: <ProductDetails /> },
          { path: ":productID/edit", element: <EditProduct /> },
          { path: "new", element: <NewProduct /> },
        ],
      },
    ],
  },
]);

```

#### `Products.jsx`
```jsx


import { Link,useLoaderData } from "react-router-dom";
function Products() {
  const data = useLoaderData();
  return (
    <>
      <h1>Products</h1>
      <ul>
      {data.map(product)=>{
         <li><Link to="{product.id}">{product.name}</Link></li>
      }}
      </ul>
    </>
  );
}

export default Products;

export  async function loader() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        {id: 1, name: "Product1"},
        {id: 2, name: "Product2"},
        {id: 3, name: "Product3"},
        {id: 4, name: "Product4"},
      ]);
    }, 3000);
  });
}

```