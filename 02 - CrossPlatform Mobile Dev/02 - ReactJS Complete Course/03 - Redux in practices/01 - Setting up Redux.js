npm install redux redux-logger react-redux

// index.js
import { Provider } from 'react-redux'

// bao cái provider ở ngoài để mọi component đều access được đến nó (giống context API)
<Provider>
    <BrowserRouter>
        <App />
    </BrowserRouter>
</Provider>

// tạo root-reducer, reducer (folder redux)
// root-reducer.js
import { combineReducers, CombineReducers } from 'redux'

import userReducer from './user/user.reducer'

export default combineReducers({
    user: userReducer,
})

// tạo store.js
import Redux from 'redux'

import logger from 'redux-logger'

import rootReducer from './root-reducer'

const middleWares = [logger]

// nên để middleWares là một cái array để chỉnh sửa cho tiện
const store = Redux.createStore(rootReducer, Redux.applyMiddleware(...middleWares))

export default store

// cho store vào làm props của provider (index.js)
import store from './redux/store'
<Provider store={store}>

