import express from "express";
import MongoToConnect from './db.js'
import cors from 'cors'
import multer from 'multer';
import path from "path";
import UserImage from './Models/Image.js'
const app = express();
const port = 3000;

//connect with the database
MongoToConnect();
app.use(cors());
app.use(express.json());
app.use(express.static('public'));


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
app.post('/upload', upload.single('file'), async (req, res) => {
    // Check if req.file is defined before accessing its properties
    if (!req.file) {
        return res.status(400).send('No file uploaded.');
    }
    try {
        const result = await UserImage.create({
            image: req.file.filename,
            name: req.file.originalname,
            data: req.file.buffer,
            contentType: req.file.mimetype,
        });

        res.status(201).send('Image uploaded successfully');
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
});

//Get the user image from the backend
app.get('/getImg', async (req, res) => {
    const user = await UserImage.find();
    try {
        res.json(user);
    } catch (error) {
        res.json(error);
    }
})
app.listen(port, () => {
    console.log(`image upload app running on port http://localhost:${port}`)
})