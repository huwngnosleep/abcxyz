// helpers
export const fetchPlaces = () => {
    const promise = new Promise((resolve, reject) => {
        db.transaction((tx) => {
        tx.executeSql(
            'SELECT * FROM places',
            [],
            (_, result) => {
                resolve(result)
            },
            (_, err) => {
                reject(err)
            }
            )
        })
    })
    return promise
}

// actions 
export const setPlaces = () => {
    return async (dispatch) => {
        try {
            var dbResult = await fetchPlaces()
            console.log(dbResult)
        } catch (error) {
            throw error
        }
        dispatch({
            type: SET_PLACES,
            places: dbResult.rows._array,
        })
    }
}