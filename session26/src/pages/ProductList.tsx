import React from "react";
import { Link, useSearchParams } from "react-router-dom";
interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
}
interface List {
  lists: Product[];
}
function ProductList() {
  const [lists] = React.useState<Product[]>([
    {
      id: 1,
      name: "Laptop Dell XPS 13",
      price: 35000000,
      description:
        "Laptop cao cấp, mỏng nhẹ, hiệu năng mạnh mẽ cho công việc và học tập.",
    },
    {
      id: 2,
      name: "iPhone 14 Pro",
      price: 30000000,
      description:
        "Điện thoại flagship của Apple với màn hình ProMotion và camera đỉnh.",
    },
    {
      id: 3,
      name: "Samsung Galaxy S22",
      price: 25000000,
      description:
        "Smartphone Android cao cấp, hiệu năng mạnh, camera chất lượng.",
    },
    {
      id: 4,
      name: "Tai nghe Sony WH-1000XM4",
      price: 7000000,
      description: "Tai nghe chống ồn hàng đầu, pin lâu, chất âm cực đỉnh.",
    },
    {
      id: 5,
      name: "Apple Watch Series 8",
      price: 12000000,
      description:
        "Smartwatch thông minh, hỗ trợ theo dõi sức khỏe và nhiều tính năng tiện ích.",
    },
  ]);
    const [searchName, setSearch] = React.useState("");
    const [searchParam, setSearchParam] = useSearchParams();
    const search = searchParam.get("search")
    function handleClick(){
        setSearchParam({search:searchName})
    }
  return (
    <>
      <div
        style={{
          width: "100%",
          height: "100px",
          backgroundColor: "blue",
          color: "white",
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <h2>Danh sách sản phẩm</h2>
        <div className="div">
                  <input type="text" name="" id=""  value={searchName} onChange={(e)=>{setSearch(e.target.value);}}/>
                  <button onClick={handleClick}>Search</button>
        </div>
      </div>
      <div
        className="div"
        style={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          justifyContent: "start",
          width: "100%",
        }}
      >
        {lists.map((p) => (
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "start",

              margin: "10px",
              width: "21%",
              border: "solid 1px gray",
              paddingTop: "10px",
              paddingLeft: "30px",
            }}
          >
            <p>{p.id}</p>
            <p>{p.name}</p>
            <p>{p.price}</p>
            <Link to={`/productDetail/${p.id}`}>Xem chi t</Link>
          </div>
        ))}
      </div>
    </>
  );
}
=

export default ProductList;
