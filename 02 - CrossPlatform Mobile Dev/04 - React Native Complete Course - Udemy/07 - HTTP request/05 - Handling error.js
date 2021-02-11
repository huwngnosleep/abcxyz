// đặt try catch trong action để khi dispatch mới gọi được trong component
// response luôn có một cái prop là ok
// new Error nhận argument đầu tiên mà message

try {
    const response = await fetch('https://huwngnosleep-onlineshopapp-default-rtdb.firebaseio.com/products.json')

    if (!response.ok) {
        throw new Error('Something went wrong!')
    }

    dispatch({
        type: SET_PRODUCTS,
        products: loadedProducts,
    })
    
} catch (error) {
    // throw error để gọi error trong component
    throw error
}

// trong component gọi error.message
try {
    await dispatch(productsActions.fetchProducts())
} catch (error) {
    setError(error.message)                
}
// rồi dùng state để render giống cái app loading