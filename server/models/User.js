<<<<<<< HEAD
import mongoose from "mongoose";


const UserSchema=new mongoose.Schema(
    {
        firstName:{
            type:String,
            required:true,
            min:2,
            max:50,
        },
        lastName:{
            type:String,
            required:true,
            min:2,
            max:50,
        },
        email:{
            type:String,
            required:true,
            max:80,
            unique:true,
        },
        password:{
            type:String,
            required:true,
            min:7,
            max:20,
            select:false
        },
        picturePath:{
            type:String,
            default:"",
        },
        friends:{
            type:Array,
            default:[]
        },
        location:String,
        occupation:String,
        viewedProfile:Number,
        impressions:Number,
    },
    {timestamps:true}
)

const User=mongoose.model('User',UserSchema);
=======
import mongoose from "mongoose";


const UserSchema=new mongoose.Schema(
    {
        firstName:{
            type:String,
            required:true,
            min:2,
            max:50,
        },
        lastName:{
            type:String,
            required:true,
            min:2,
            max:50,
        },
        email:{
            type:String,
            required:true,
            max:80,
            unique:true, 
        },
        password:{
            type:String,
            required:true,
            min:7,
            max:20,
        },
        picturePath:{
            type:String,
            default:"",
        },
        friends:{
            type:Array,
            default:[]
        },
        location:String,
        occupation:String,
        viewedProfile:Number,
        impressions:Number,
    },
    {timestamps:true}
)

const User=mongoose.model('User',UserSchema);
>>>>>>> be4ece29ea09a84ee7ab4d0ef89ac3a3922309b8
export default User;