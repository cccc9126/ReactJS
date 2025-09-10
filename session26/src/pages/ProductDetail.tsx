import React from 'react'
import { useParams } from 'react-router-dom'

function ProductDetail() {
     const id = useParams();
  return (
    <>
      <div>ProductDetail</div>
          <p>{ id.id}</p>
    </>
  );
}

export default ProductDetail