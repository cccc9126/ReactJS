const State = { value: 3 };
type Action = { type: "hahaa"; payload: number } | { type: "reset" };
const hw1Reducer = (state = State, action:Action) => {
    switch (action.type) {
        case "hahaa":
            
    }
    return state
}