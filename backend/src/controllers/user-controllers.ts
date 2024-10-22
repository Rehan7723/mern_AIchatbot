import user_model from "../models/user_model.js";

export const getAllusers = async(req, res, next)=>{
    try {
        const users = await user_model.find()

        res.status(200).json({
            message:"ok",
            users
        })
    } catch (error) {
        console.log(error);
        
        res.status(400).json({
            message: "error",
            error
        })
    }
    
}