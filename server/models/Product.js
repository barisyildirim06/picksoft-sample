const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const productSchema = Schema({
    companyname: {
        type: String,
        maxlength: 250
    },
    description: {
        type: String
    },
    imageshorizontal: {
        type: Array,
        default:[]
    },
    maximumspend: {
        type: Number,
    },
    minimumspend: {
        type: Number,
    }
}, { timestamps: true })



const Product = mongoose.model('Product', productSchema);

module.exports = { Product }