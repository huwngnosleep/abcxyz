import * as SQLite from 'expo-sqlite'

const db = SQLite.openDatabase('places.db')

// nên ném cái transaction vào promise để biết nó success hay error
export const init = () => {
    const promise = new Promise((resolve, reject) => {
        db.transaction((tx) => {
            // đây là sql command, trong ngoặc là các record (row)    
            tx.executeSql('CREATE TABLE IF NOT EXISTS places (id INTEGER PRIMARY KEY NOT NULL, title TEXT NOT NULL, imageUri TEXT NOT NULL, address TEXT NOT NULL, lat REAL NOT NULL, lng REAL NOT NULL)',
                [],
                () => {
                    resolve()
                },
                (_, err) => {
                    reject(err)
                }
            )
        })
    })
    return promise
}

// rồi cho chạy init function trong app.js
import { init } from './helpers/db'

init().then(() => {
  console.log('success')
}).catch((err) => {
  console.log(err)
})