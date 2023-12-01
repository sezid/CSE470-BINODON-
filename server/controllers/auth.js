import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import User from '../models/User.js'
import { checkStrength } from '../middleware/auth.js'

// Register user
export const register= async(req,res)=>{
    try{
        const{
            firstName,
            lastName,
            email,
            password,
            picturePath,
            friends,
            location,
            occupation
        } = req.body;
        let z=checkStrength(password);
        if(!z.strong) return res.status(400).json({msg:z.msg,err:'password'})
        const salt=await bcrypt.genSalt();
        const passwordHash= await bcrypt.hash(password,salt);
        const newUser=new User({
            firstName,
            lastName,
            email,
            password:passwordHash,
            picturePath,
            friends,
            location,
            occupation,
            viewedProfile:Math.floor(Math.random()*1000),
            impressions:Math.round(Math.random()*1000),
        });
        const savedUser=await newUser.save();
        res.status(201).json(savedUser)
    } catch(err){
        console.error(err)
        return res.status(500).json({error:err.message})
    }
}

// Log in
export const login =async(req,res)=>{
    try{
        // throw new Error('500 test')
        const {email,password}=req.body;
        const user=await User.findOne({email:email})
        if(!user)
            return res.status(400).json({msg:'User not found !',err:'email'})
        let z=checkStrength(user.password+'');
        if(!z.strong)
            return res.status(400).json({msg:z.msg,err:'password'})
        const isMatch=await bcrypt.compare(password,user.password)
        if(!isMatch)
            return res.status(400).json({msg:'Invalid Password !',err:'password'})  
        const token=jwt.sign({id:user._id},process.env.JWT_SECRET)
        delete user.password;
        res.status(200).json({token,user})
    } catch(err){
        res.status(500).json({error:err.message})
    }
}
