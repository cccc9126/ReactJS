export interface Product {
  id: number;
  name: string;
  description: string;
  quantity: number;
  price: number;
}

const initialState: Product[] = [];

export default function cartReducer(state = initialState, action: any) {
  switch (action.type) {
      case "ADD_TO_CART":
          
          
      return [...state, action.payload]; 
    case "REMOVE_FROM_CART":
      return state.filter((p) => p.id !== action.payload);
    default:
      return state;
  }
}
