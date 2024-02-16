import express from "express";
import MongoToConnect from './db.js'
import cors from 'cors'
import multer from 'multer';
import path from "path";

const app = express();
const port = 3000;

//connect with the database
MongoToConnect();
app.use(cors);
app.use(express.json())

const storage = multer.diskStorage({
    destination: (req, res, next) => {
        next(null, 'public/images');
    },
    filename: (req, file, next) => {
        next(null, file.fieldname + "_" + Date.now() + path.extname(file.originalname))
    }
})
const upload = multer({
    storage: storage
})
app.post('/upload', upload.single('file'), (req, res) => {
    console.log(req.body);
})



app.listen(port, () => {
    console.log(`image upload app running on port http://localhost:${port}`)
})