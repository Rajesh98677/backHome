import User from '../models/user.js'


export const allUsers = async(req,res) =>{
    // const {name,email } = req.body
    try {
        const allpeople = await User.find();
        console.log(User)
        res.status(200).json(allpeople);
    } catch (error) {
        res.status(404).json({message:error.message});
    }
}
