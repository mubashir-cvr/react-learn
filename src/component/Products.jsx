import React from "react";
import { Link, useLoaderData } from "react-router-dom";
function Products() {
  const data = useLoaderData();

  return (
    <>
      <h1>Products</h1>
      <ul>
        {data.map((x) => {
          return <li><Link to={`${x.id}`}>{x.name}</Link></li>
        })}
      </ul>
    </>
  );
}

export default Products;

export async function loader() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        { id: 1, name: "Product 1" },
        { id: 2, name: "Product 2" },
        { id: 3, name: "Product 3" },
        { id: 4, name: "Product 4" },
      ]);
    }, 3000);
  });
}
