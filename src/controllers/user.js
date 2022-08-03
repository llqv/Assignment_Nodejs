import User from "../models/user";

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