import React from "react";
import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "../../store/store";
import { randomClick } from "./randomSlice";

function Random() {
    const numbers = useSelector((state: RootState) => state.random);
    
  const dispatch = useDispatch();

  return (
    <div>
      
      <div>{numbers.map((n) => n.random).join(", ")}</div>
      <button onClick={() => dispatch(randomClick())}>Click</button>
    </div>
  );
}

export default Random;
