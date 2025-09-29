import axios from 'axios';
import React from 'react'

function Upload() {
    const [file, setFile] = React.useState<File | null>(null)
    const [img, setImg] = React.useState<string>("")
    function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
      const files = e.target.files;
      if (files && files[0]) {
        setFile(files[0]);
      }
        
    }
 async function handleUpload() {
    if (file) { 
        const data = new FormData();
        data.append("file", file);
        data.append("upload_preset", "upload")
        data.append("cloud_name", "doj9thlet");
        const res = await axios.post("https://api.cloudinary.com/v1_1/doj9thlet/image/upload", data);
        setImg(res.data.url)
        console.log(res.data.url)
    }

}
  return (
      <div>
          
          <input type="file"onChange={handleChange} />
          <button onClick={handleUpload}>Upload</button>
          <img src={img} alt="" />
    </div>
  )
}

export default Upload