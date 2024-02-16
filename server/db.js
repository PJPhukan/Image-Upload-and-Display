import mongoose from 'mongoose'
const mongoUrl = "mongodb://127.0.0.1:27017/ImageUploadDisplay"

const MongoToConnect=()=>{
    mongoose.connect(mongoUrl).then(()=>{
        console.log("Connection Successfull");
    }).catch(()=>{
        console.log("Connection failed")
    })
}

export default MongoToConnect;