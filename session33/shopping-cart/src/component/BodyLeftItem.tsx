import React from 'react'

function BodyLeftItem() {
  return (
    <div className="media product">
      <div className="media-left">
        <a href="#">
          <img className="media-object" src="images/pizza.jpg" alt="pizza" />
        </a>
      </div>
      <div className="media-body">
        <h4 className="media-heading">Pizza</h4>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. At dicta
          asperiores veniam repellat unde debitis quisquam magnam magni ut
          deleniti!
        </p>
        <input name="quantity-product-1" type="number"  />
        <span className="price">30 USD</span>
      </div>
    </div>
  );
}

export default BodyLeftItem