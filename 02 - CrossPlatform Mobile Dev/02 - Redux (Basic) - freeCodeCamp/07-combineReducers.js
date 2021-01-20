const initState1 = {
    state1: 1
}

const reducer1 = (state, action) => {
    return state
}

const initState2 = {
    state2: 2
}

const reducer2 = (state, action) => {
    return state
}

const rootReducer = Redux.combineReducers({
    state1: reducer1,
    state2: reducer2
})