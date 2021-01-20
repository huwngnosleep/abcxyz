const reducer = (state = defaultState, action) => {
    if (action.type === 'LOGIN') {
      return {
        ...state,
        login: true
      }
    }
    return state
};