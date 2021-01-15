const loginAction = () => {
    return {
      type: 'LOGIN'
    }
};

store.dispatch(loginAction()) // it will be an object {type: 'LOGIN'}
