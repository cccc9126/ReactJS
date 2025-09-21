import React from 'react'
import BodyRightItem from './BodyRightItem'
import CartNotice from './CartNotice';
import type { RootState } from '../reducer';
import { useSelector } from 'react-redux';
interface Product {
  id: number;
  name: string;
  description: string;
  quantity: number;
  price: number;
}
function BodyRight() {
  const cart:Product[] = useSelector((state: RootState) => state.reducer2);
  return (
    <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6">
      <div className="panel panel-danger">
        <div className="panel-heading">
          <h1 className="panel-title">Your Cart</h1>
        </div>
        <div className="panel-body">
          <table className="table">
            <thead>
              <tr>
                <th>STT</th>
                <th>Name</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody id="my-cart-body">
              <BodyRightItem />
            </tbody>
            <tfoot id="my-cart-footer">
              <tr>
                <td colSpan={4}>
                  There are <b>{cart.length }</b> items in your shopping cart.
                </td>
                <td colSpan={2} className="total-price text-left">
                  {cart.reduce((total, c) => total+c.price,0)}
                </td>
              </tr>
            </tfoot>
          </table>
        </div>
      </div>
      <CartNotice />
    </div>
  );
}

export default BodyRight