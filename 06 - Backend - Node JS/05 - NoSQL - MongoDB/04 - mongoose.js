// mongoose giúp dev chỉ cần tập trung vào model
// mongoose sẽ handle các thao tác với database

const mongoose = require('mongoose')

const productSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    imageUrl: {
        type: String,
        required: true,
    },
})

module.exports = mongoose.model('Product', productSchema)

