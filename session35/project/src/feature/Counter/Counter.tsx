import React from "react";
import { useSelector, useDispatch } from "react-redux";
import type { RootState } from "../../store/store";
import { decrement, increment } from "./counterSlide";


function Counter() {
    const value = useSelector((state: RootState) => state.counter.value);
    const dispatch=useDispatch()


  return (
    <div>
          <h2>Counter: {value}</h2>
          <button onClick={()=>{dispatch(increment())}}>+</button>
          <button onClick={()=>{dispatch(decrement())}}>-</button>
   
    </div>
  );
}

export default Counter;
