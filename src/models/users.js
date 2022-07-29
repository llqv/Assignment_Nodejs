import mongoose from "mongoose"

const userSchema = mongoose.Schema(
    {
        name: {
            type: String,
            required: true
        },
        email: {
            type: String,
            required: true
        },
        password: {
            type: String,
            required: true
        },
        role: {
            type: Number,
            default: 0
        },
    },
    { timestamps: true }
);
export default ("User", userSchema)