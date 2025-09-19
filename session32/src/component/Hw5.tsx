import React from "react";
import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "../store/store";


export default function Hw5() {
  const company = useSelector((state: RootState) => state.hw5.company);
  const dispatch = useDispatch();

  return (
    <div>
      <h2>{company}</h2>
      <button onClick={() => dispatch({ type: "CHANGE_COMPANY" })}>
        Change state
      </button>
    </div>
  );
}
