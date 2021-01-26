// all states in can be stored in only one store
// Redux.createStore take a reducer function as argument
const reducer = (state = 5) => {
    return state
}

let store = Redux.createStore(reducer)