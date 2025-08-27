import React from 'react'
interface State{
    count: number
}
function Homework1() {
    const reducer = (state: State, action: { type: "Increase" }) => {
        switch (action.type) {
            case "Increase":
                return { count: state.count + 1 }
            default:
                return state
        }
    }
    const [state, dispatch] = React.useReducer(reducer, { count: 0 })
  return (
    <>
          <h1>{ state.count}</h1>
      <button onClick={() => dispatch({ type: "Increase" })}>Increase</button>
    </>
  );
}

export default Homework1