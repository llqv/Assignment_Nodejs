import mongoose from "mongoose";
import { createHmac } from "crypto";

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
            minlength: 6,
        },
        avatar:{
            type: String,
        },
        role: {
            type: Number,
            default: 0,
        },
        avatar: {
            type: String
        }
    },
    { timestamps: true }
);

userSchema.methods = {
    authenticate(password) {
        return this.password === this.encrytPassword(password);
    },
    encrytPassword: (password) => {
        if (!password) return;
        try {
            return createHmac("sha256", "abc").update(password).digest("hex");
        } catch (error) {
            console.log(error);
        }
    },
};

userSchema.pre("save", function (next) {
    this.password = this.encrytPassword(this.password);
    next();
});
export default mongoose.model("User", userSchema);