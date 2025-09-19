import React from "react";
import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "../store/store";


export default function Hw3() {
  const counter = useSelector((state: RootState) => state.hw3.counter);
  const dispatch = useDispatch();

  return (
    <div>
      <h2>Counter: {counter}</h2>
      <button onClick={() => dispatch({ type: "INCREMENT" })}>+</button>
      <button onClick={() => dispatch({ type: "DECREMENT" })}>-</button>
    </div>
  );
}
