// nếu mà trong component có nhiều state quá thì nên dùng useReducer
// đầu tiên là tạo reducer như trong redux
const FORM_UPDATE = 'UPDATE'

const formReducer = (state, action) => {
    if(action.type === FORM_UPDATE) {
        // logic here
    }
    return state
}

// dùng destructure giống useState
// useReducer nhận vào 2 params, đầu tiên là reducer, sau đó là initialState
const [formState, dispatchFormState] = useReducer(formReducer, {
    inputValues: {
        title: editedProduct ? editedProduct.title : '',
        imageUrl: editedProduct ? editedProduct.imageUrl : '',
        description: editedProduct ? editedProduct.description : '',
        price: '',
    }, 
    inputValidities: {
        title: editedProduct ? true : false,
        imageUrl: editedProduct ? true : false,
        description: editedProduct ? true : false,
        price: editedProduct ? true : false,
    }, 
    formIsValid: editedProduct ? true : false
})

// rồi làm y hệt như với redux
// action là một object
dispatchFormState({
    type: FORM_UPDATE, 
    value: text,
    isValid: isValid,
    input: inputIdentifier,
})