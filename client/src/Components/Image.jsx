import React, { useState, useEffect } from 'react'
import axios from 'axios'
import ImageItem from './ImageItem'
import "./Image.css"
const Image = () => {
    const [image, setImage] = useState([]);
    const [file, setFile] = useState();

    //Store image in the database
    const HandleClick = async (e) => {
        const formData = new FormData();
        formData.append('file', file);
        axios.post("http://localhost:3000/upload", formData).then((res) => {
            console.log(res)
            getAllImage();
        }).catch((e) => {
            console.log(e);
        })
    }

    //Retrive image from the database
    const getAllImage = async () => {
        const url = "http://localhost:3000/getImg";
        const response = await fetch(url, {
            method: "GET"
        })
        const json = await response.json();
        //Logic to fetch all notes
        setImage(json);
    }

    useEffect(() => {
        getAllImage();
    }, [])

    return (
        <>
            <input type="file" onChange={e => setFile(e.target.files[0])} />
            <button onClick={HandleClick}>Upload</button>
            <div className="img-box">

                <img src={`http://localhost:3000/images/${image}`} alt="" />
                {image.map((img) => {
                    return <ImageItem key={img._id} img={img}></ImageItem>
                })
                }
            </div>
        </>
    )
}

export default Image
