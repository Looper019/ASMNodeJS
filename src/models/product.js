import mongoose from "mongoose";
const productSchema = new mongoose.Schema({
    name: {
        type: 'string',
    },
    price: {
        type: 'number',
    },
    desc: {
        type: 'string',
    },
    status: {
        type: 'boolean',
    },
    quanlity: {
        type: 'number',
    }
})
export default mongoose.model('Product',productSchema)