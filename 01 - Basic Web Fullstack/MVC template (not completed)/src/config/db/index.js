let MongoClient = require('mongodb').MongoClient

MongoClient.connect('mongodb://localhost:27017/f8_education_dev', function (err, client) {
    if (err) throw err

    let db = client.db('f8_education_dev')

    console.log(result)
})

