import React, { useMemo } from "react";

function Homework1() {
  const [cart, setCart] = React.useState([
    { id: 1, name: "Product 1", price: 100, quantity: 2 },
    { id: 2, name: "Product 2", price: 200, quantity: 1 },
    { id: 3, name: "Product 3", price: 150, quantity: 3 },
  ]);
  let cartTotal = useMemo(() => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  }, [cart]);
    return <div>{cartTotal}</div>;
}

export default Homework1;
