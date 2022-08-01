import user from "../models/user";

export const signup = async (req,res) => {
    try {
        const User = await new user(req.body).save();
        return res.status(200).json({
            User : {
                email : User.email,
                name : User.name,
                role : User.role
            }
        })
    } catch (error) {
        return res.status(400).json({
             message : "Đăng ký không thành công"
        })
    }
}



export const signin = async (req, res) => {
    try {
        const User = await user.findOne({ email: req.body.email }).exec();
        if (!User) {
            return res.status(400).json({
                message: "Email không tồn tại",
            });
        }
        if (!User.authenticate(req.body.password)) {
            return res.status(400).json({
                message: "Sai mat khau",
            });
        }  
        return res.status(200).json({
              message : "Đăng nhập thành công"
        });
    } catch (error) {}
};