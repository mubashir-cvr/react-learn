import React from "react";
import { Link } from "react-router-dom";

function ProductDetails() {
  return (
    <>
      <h1>ProductDetails</h1>

      <p>
        <Link to=".." relative="path" >Back</Link>
       
      </p>
      <p>
      <Link to="edit" >Edit</Link>
      </p>
    </>
  );
}

export default ProductDetails;
