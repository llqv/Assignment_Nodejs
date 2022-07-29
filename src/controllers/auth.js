import user from "../models/user";

export const signup = async (req,res) => {
    try {
        const users = await new user(req.body).save();
        return res.status(200).json({
            users : {
                email : user.email,
                name : user.name,
                role : user.role
            }
        })
    } catch (error) {
        return res,status(400).json({
             message : "Đăng ký không thành công"
        })
    }
}



export const signin = async (req,res) => {
    try {
        const users =  await user.findOne({email : req.body.email}).exec()
        if (!user) {
            return res.status(400).json({
                message : "Email khong ton tai"
            })
        }
    } catch (error) {
        
    }
}