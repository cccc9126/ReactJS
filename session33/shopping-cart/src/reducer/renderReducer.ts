interface Product {
  id: number;
  name: string;
  description: string;
  quantity: number;
  price: number;
}

const initialState: Product[] = [
  {
    id: 1,
    name: "Pizza Margherita",
    description: "Đế mỏng, phô mai mozzarella, sốt cà chua, lá basil.",
    quantity: 10,
    price: 120000,
  },
  {
    id: 2,
    name: "Pizza Pepperoni",
    description: "Phô mai kéo sợi, xúc xích pepperoni cay cay.",
    quantity: 8,
    price: 150000,
  },
  {
    id: 3,
    name: "Pizza Hải Sản",
    description: "Tôm, mực, thanh cua, sốt mayonnaise béo ngậy.",
    quantity: 6,
    price: 180000,
  },
  {
    id: 4,
    name: "Mì Ý Carbonara",
    description: "Sốt kem trứng, thịt xông khói, phô mai parmesan.",
    quantity: 12,
    price: 100000,
  },
];

const renderReducer = (state = initialState, action: any) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default renderReducer;
