import mongoose from "mongoose";

const categorySchema = mongoose.Schema({
    name: {
        type: String,
        required: true
<<<<<<< HEAD
    },
    id: {
        type: Number,
        // required: true
=======
>>>>>>> f3eacde49739e8b9b2810bcf2ea79ff1364fb9ad
    }

});
export default mongoose.model('Category', categorySchema)