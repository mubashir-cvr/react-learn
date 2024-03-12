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