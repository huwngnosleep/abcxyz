// nó na ná cái setup, chỉ khác chỗ sql command
export const insertPlace = (title, imageUri, address, lat, lng) => {
    const promise = new Promise((resolve, reject) => {
        db.transaction((tx) => {
        tx.executeSql(
            // đặt ???? thế kia là để tránh bị attack
            `INSERT INTO places (title, imageUri, address, lat, lng) VALUES (?, ?, ?, ?, ?)`,
            // ở cái array này sẽ là các tham số ném vào chỗ ???? đấy
            // tất nhiên là phải đúng thứ tự
            [title, imageUri, address, lat, lng],
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

// rồi gọi trong action
import { insertPlace } from '../helpers/db'

var dbResult = await insertPlace(title, newPath, 'Dummy address', 16, 15)

