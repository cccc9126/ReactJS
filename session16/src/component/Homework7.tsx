import React, { useState } from "react";
import "./Homework7.css";

interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
}

interface CartItem extends Product {
  quantity: number;
}

const products: Product[] = [
  {
    id: 1,
    name: "Điện thoại Samsung Galaxy",
    price: 20000000,
    image:
      "https://cdn.tgdd.vn/Products/Images/42/223602/samsung-galaxy-s21-plus-5g-thumb-600x600-600x600.jpg",
  },
  {
    id: 2,
    name: "Điện thoại Iphone14 Promax",
    price: 20500000,
    image:
      "https://cdn.tgdd.vn/Products/Images/42/251192/iphone-14-pro-max-thumb-den-600x600.jpg",
  },
  {
    id: 3,
    name: "Điện thoại Samsung Galaxy",
    price: 21000000,
    image:
      "https://cdn.tgdd.vn/Products/Images/42/223602/samsung-galaxy-s21-5g-purple-600x600.jpg",
  },
  {
    id: 4,
    name: "Điện thoại Iphone11 Promax",
    price: 21500000,
    image:
      "https://cdn.tgdd.vn/Products/Images/42/213031/iphone-11-pro-max-256gb-gold-600x600.jpg",
  },
  {
    id: 5,
    name: "Điện thoại Samsung Galaxy",
    price: 22000000,
    image:
      "https://cdn.tgdd.vn/Products/Images/42/223602/samsung-galaxy-s21-pink-600x600.jpg",
  },
  {
    id: 6,
    name: "Điện thoại Samsung Galaxy",
    price: 22500000,
    image:
      "https://cdn.tgdd.vn/Products/Images/42/223602/samsung-galaxy-s21-gold-600x600.jpg",
  },
  {
    id: 7,
    name: "Điện thoại Oppo A9",
    price: 23000000,
    image:
      "https://cdn.tgdd.vn/Products/Images/42/222596/oppo-a9-2020-xanh-600x600.jpg",
  },
  {
    id: 8,
    name: "Điện thoại Oppo V5",
    price: 23500000,
    image:
      "https://cdn.tgdd.vn/Products/Images/42/234341/oppo-reno5-pink-600x600.jpg",
  },
];

function App() {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [showCart, setShowCart] = useState(false);

  



  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div>
      {/* Thanh menu */}
      <div className="navbar">
        <button className="tab">Trang chủ</button>
        <button className="tab active">Danh sách sản phẩm</button>
        <div className="cart-icon" onClick={() => setShowCart(!showCart)}>
          🛒
        </div>
      </div>

      {/* Danh sách sản phẩm */}
      <div className="product-list">
        {products.map((p) => (
          <div key={p.id} className="product-card">
            <img src={p.image} alt={p.name} />
            <h4>{p.name}</h4>
            <p>{p.price.toLocaleString()} đ</p>
            <button >🛒 Thêm vào giỏ hàng</button>
          </div>
        ))}
      </div>

      {/* Giỏ hàng */}
      {showCart && (
        <div className="cart-popup">
          <h3>Cart</h3>
          {cart.length === 0 ? (
            <p>Giỏ hàng trống</p>
          ) : (
            <>
              {cart.map((item) => (
                <div key={item.id} className="cart-item">
                  <img src={item.image} alt={item.name} />
                  <span>{item.name}</span>
                  <div className="quantity">
                    <button>
                      -
                    </button>
                    <span>{item.quantity}</span>
                    <button >
                      +
                    </button>
                  </div>
                  <button >🗑️</button>
                </div>
              ))}
              <p className="total">Tổng tiền: {total.toLocaleString()} đ</p>
            </>
          )}
        </div>
      )}
    </div>
  );
}

export default App;
