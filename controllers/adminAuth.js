import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

import Admin from '../models/admin.js';

export const adminSignIn = async (req,res) =>{
    const {email, password} = req.body
    
    try {
        const existingUser = await Admin.findOne({email});

        if(!existingUser) return res.status(404).json ({message:'user doesnt exist'});

        const isPasswordCorrect = await bcrypt.compare(password,existingUser.password);

        if(!isPasswordCorrect) return res.status(400).json({message:"invalid credenditail"});

        const token = jwt.sign({email: existingUser.email,id:existingUser._id }, 'AdminAuth',{expiresIn:'2h'});

        res.status(200).json({result: existingUser,token });
        
    } catch (error) {
        res.status(500).json({message:'something went wrong'});
    }
};



export const adminSignUp = async (req,res) =>{
    const { email,password,confirmPassword,firstName,lastName} = req.body;

    try {
        const existingUser = await Admin.findOne({email});
        if(existingUser) return res.status(404).json({message:"user already exists"});

        if(password != confirmPassword) return res.status(400).json ({message:"password dont match"})

        const hashedPassword = await bcrypt.hash(password,12);

        const result = await Admin.create({email,password:hashedPassword, name:`${firstName} ${lastName}`})

        const token = jwt.sign({email: result.email,id:result._id }, 'homerent',{expiresIn:'1h'});

        res.status(200).json({result ,token });

    } catch (error) {
     res.status(500).json({message:'something went wrong'});

    }

};


