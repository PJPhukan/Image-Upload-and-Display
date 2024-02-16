import mongoose from 'mongoose'
import { Schema } from 'mongoose'

const ImgSchema=new Schema({
    image:String
})

const UserImage=mongoose.model('userImage',ImgSchema);
export default UserImage;