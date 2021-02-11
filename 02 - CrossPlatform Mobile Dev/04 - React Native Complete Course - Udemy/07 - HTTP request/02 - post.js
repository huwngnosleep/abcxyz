export const createProduct = (title, description, imageUrl, price) => {
    return async (dispatch) => {
        // any async code you want
        // fetch api nhận argument thứ hai là một object, trong đó có thể setup cho http request
        // thay vì dùng .then .catch thì dùng async await
        const response = await fetch('https://huwngnosleep-onlineshopapp-default-rtdb.firebaseio.com/products.json', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                title,
                description,
                imageUrl,
                price,
            })
        })
	
        const resData = await response.json()

        dispatch({
            type: CREATE_PRODUCT,
            productData: {
                id: resData.name,
                title,
                description,
                imageUrl,
                price,
            }
        })
    }
}