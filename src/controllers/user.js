import User from "../models/user";
import jwt from "jsonwebtoken";

export const userById = async (req, res, next, id) => {
    try {
        const user = await User.findById(id).exec();
        if (!user) {
            return res.status(400).json({
                message: "Không tìm thấy user",
            });
        }
        user.password = undefined;
        req.profile = user;
        next();
    } catch (error) {}
};

export const userByToken = async (req, res, next) => {
    try {
        // const token = jwt.sign({ id: user._id }, "123456", { expiresIn: "1h" });
        const {id} = jwt.verify(req.params.token, "123456")
        const user = await User.findById(id).exec();
        if (!user) {
            return res.status(400).json({
                message: "Không tìm thấy user",
            });
        }
        return res.status(200).json({
            role : user.role,
            id : user._id,
            email: user.email,
        });
    } catch (error) {
        return res.status(400).json({
            message: "Hết phiên đăng nhập",
        });
    }
};
