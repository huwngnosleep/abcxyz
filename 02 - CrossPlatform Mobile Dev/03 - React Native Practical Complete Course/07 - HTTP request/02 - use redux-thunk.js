chuyển cái action thành function dạng này

export const createProduct = (title, description, imageUrl, price) => {
    return (dispatch) => {
        // any async code you want
        // fetch api có argument thứ hai là một object
        // có thể setup cái http request đấy ở trong này
        // /products.json là chuẩn của firebase, nếu post lên tự nó sẽ tạo một folder cho mình
        fetch('https://huwngnosleep-onlineshopapp-default-rtdb.firebaseio.com/products.json', {
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
        dispatch({
            type: CREATE_PRODUCT,
            productData: {
                title,
                description,
                imageUrl,
                price,
            }
        })
    }
}