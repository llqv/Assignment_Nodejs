import mongoose from "mongoose";

const productSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    originalPrice: {
        type: Number,
        required: true
    },
    Image: {
        type: String,
        required: true
    },
    saleOffPrice: {
        type: Number,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    shortDescription: {
        type: String,
        required: true
    },
    feature: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    isDelete: {
        type: Boolean,
        default: false
    }

});
export default mongoose.model('Product', productSchema)