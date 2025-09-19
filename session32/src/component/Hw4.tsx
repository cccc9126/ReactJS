import React from "react";
import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "../store/store";




export default function Hw4() {
  const numbers = useSelector((state: RootState) => state.hw4);
  const dispatch = useDispatch();

  return (
    <div>
      <h2>Random Numbers</h2>
      <button onClick={() => dispatch({ type: "ADD_RANDOM" })}>
        Generate Random Number
      </button>
      <p>{JSON.stringify(numbers)}</p>
    </div>
  );
}
