import React from 'react'
import CartNotice from './CartNotice';

function BodyRightItem() {
  return (
    <tr>
      <th scope="row">1</th>
      <td>Cake</td>
      <td>10 USD</td>
      <td>
        <input name="cart-item-quantity-1" type="number" defaultValue={15} />
      </td>
      <td>
        <a className="label label-info update-cart-item" data-product="">
          Update
        </a>
        <a className="label label-danger delete-cart-item" data-product="">
          Delete
        </a>
      </td>
      </tr>
      
  );
}

export default BodyRightItem