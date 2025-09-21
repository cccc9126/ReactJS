import React from 'react'
import CartNotice from './CartNotice';
import { useDispatch, useSelector } from 'react-redux';
import type { RootState } from '../reducer';
interface Product {
  id: number;
  name: string;
  description: string;
  quantity: number;
  price: number;
}
function BodyRightItem() {
  const cart = useSelector((state: RootState) => state.reducer2)
    const dispatch=useDispatch()
  return (
    <>
      {cart.map((item: Product, index: number) => (
        <tr key={item.id}>
          <th scope="row">{index + 1}</th>
          <td>{item.name}</td>
          <td>{item.price} VND</td>
          <td>
            <input
              name={`cart-item-quantity-${item.id}`}
              type="number"
              defaultValue={item.quantity}
            />
          </td>
          <td>
            <a
              className="label label-danger delete-cart-item"
              onClick={() =>
                dispatch({ type: "REMOVE_FROM_CART", payload: item.id })
              }
            >
              Delete
            </a>
          </td>
        </tr>
      ))}
    </>
  );
}

export default BodyRightItem