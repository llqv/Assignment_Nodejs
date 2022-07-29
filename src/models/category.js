import mongoose from "mongoose";

const categorySchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    }

});
export default mongoose.model('Category', categorySchema)