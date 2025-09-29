import axios from "axios";
import React, { useRef, useState } from "react";
import Cropper from "react-cropper";
import "cropperjs/dist/cropper.css";

function Upload() {
  const [file, setFile] = useState<File | null>(null);
  const [image, setImage] = useState<string>("");
  const [img, setImg] = useState<string>("");
  const cropperRef = useRef<HTMLImageElement>(null);

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const files = e.target.files;
    if (files && files[0]) {
      const reader = new FileReader();
      reader.onload = () => {
        setImage(reader.result as string);
      };
      reader.readAsDataURL(files[0]);
      setFile(files[0]);
    }
  }

  async function handleUpload() {
    const cropper = (cropperRef.current as any)?.cropper;
    if (cropper) {
      const canvas = cropper.getCroppedCanvas();
      const blob = await new Promise<Blob>((resolve) =>
        canvas.toBlob((b: Blob) => resolve(b as Blob), "image/jpeg")
      );
      const data = new FormData();
      data.append("file", blob);
      data.append("upload_preset", "upload");
      const res = await axios.post(
        "https://api.cloudinary.com/v1_1/doj9thlet/image/upload",
        data
      );
      setImg(res.data.secure_url);
    }
  }

  return (
    <div>
      <input type="file" onChange={handleChange} />
      {image && (
        <Cropper
          src={image}
          style={{ height: 300, width: "100%" }}
          aspectRatio={1}
          guides={true}
          ref={cropperRef}
        />
      )}
      <button onClick={handleUpload}>Upload</button>
      {img && <img src={img} alt="" width={200} />}
    </div>
  );
}

export default Upload;
