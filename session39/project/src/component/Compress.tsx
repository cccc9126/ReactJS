import React, { useState } from "react";
import axios from "axios";
import Resizer from "react-image-file-resizer";

function UploadCompress() {
  const [file, setFile] = useState<File | null>(null);
  const [img, setImg] = useState<string>("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files && files[0]) {
      setFile(files[0]);
    }
  };

  const resizeFile = (file: File): Promise<Blob> =>
    new Promise((resolve) => {
      Resizer.imageFileResizer(
        file,
        800, // max width
        800, // max height
        "JPEG", // format
        80, // quality %
        0, // rotation
        (uri) => {
          if (uri instanceof Blob) resolve(uri);
        },
        "blob"
      );
    });

  const handleUpload = async () => {
    if (!file) return;

    const compressedFile = await resizeFile(file);

    const data = new FormData();
    data.append("file", compressedFile);
    data.append("upload_preset", "upload");

    const res = await axios.post(
      "https://api.cloudinary.com/v1_1/doj9thlet/image/upload",
      data
    );

    setImg(res.data.secure_url);
  };

  return (
    <div>
      <input type="file" onChange={handleChange} />
      <button onClick={handleUpload}>Upload</button>
      {img && <img src={img} alt="uploaded" width={300} />}
    </div>
  );
}

export default UploadCompress;
