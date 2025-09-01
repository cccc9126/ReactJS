import React from 'react'

function Homework7() {
    const [count, setCount] = React.useState(0);
    type Action = | { type: "increase" } | { type: "decrease" };
    const reducer= (state: number, action: Action): number => {
        switch (action.type) {
            case "increase":
                return state + 1;
            case "decrease":
                return state - 1;
            default:
                return state;
        }
    };
    const [state, dispatch] = React.useReducer(reducer, 0);
    
  return (
      <>
          <h1>{state}</h1>
          <button onClick={()=>dispatch({type:"increase"})}>Increase</button>
            <button onClick={() => dispatch({type:'decrease'})}>Decrease</button>
      </>
  )
}

export default Homework7