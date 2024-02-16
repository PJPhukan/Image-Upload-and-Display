import mongoose from 'mongoose'
import { Schema } from 'mongoose'

const ImgSchema=new Schema({
    image:String,
    name: {
        type: String,
        required: true,
    },
    data: {
        type: Buffer
    },
    contentType: {
        type: String
    },
    created_at: {
        type: Date,
        default: Date.now,
    },
})

const UserImage=mongoose.model('userImage',ImgSchema);
export default UserImage;