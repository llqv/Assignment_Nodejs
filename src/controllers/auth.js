import User from "../models/user";
import jwt from "jsonwebtoken";

export const signup = async (req, res) => {
    try {
        const existEmail = await User.findOne({ email: req.body.email }).exec();
        if (existEmail) {
            return res.status(400).json({
                message: "Email đã tồn tại",
            });
        }

        const user = await new User(req.body).save();
        console.log(user);
        return res.status(200).json({
            user: {
                email: user.email,
                name: user.name,
                role: user.role,
            },
        });
    } catch (error) {
        return res.status(400).json({
            message: "Dang ky khong thanh cong",
            error,
        });
    }
};
export const signin = async (req, res) => {
    try {
        const user = await User.findOne({ email: req.body.email }).exec();
        if (!user) {
            return res.status(400).json({
                message: "Email không tồn tại",
            });
        }

        if (!user.authenticate(req.body.password)) {
            return res.status(400).json({
                message: "Sai mat khau",
            });
        }
        const token = jwt.sign({ id: user._id }, "123456", { expiresIn: 60 * 60 });
        return res.status(200).json({
            token,
            user: {
                id: user._id,
                email: user.email,
            },
        });
    } catch (error) {}
};