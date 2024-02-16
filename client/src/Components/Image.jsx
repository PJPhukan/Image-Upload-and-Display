import React, { useState } from 'react'
import axios from 'axios'
const Image = () => {
    const [file, setFile] = useState()
    const HandleClick =async (e) => {
        const formData = new FormData();
        formData.append('file', file);
        axios.post("http://localhost:3000/upload", formData).then((res) => {
            console.log(res)
        }).catch((e) => {
            console.log(e);
        })
    }
    return (
        <>
            <input type="file" onChange={e => setFile(e.target.files[0])} />
            <button onClick={HandleClick}>Upload</button>
        </>
    )
}

export default Image
