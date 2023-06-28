'use client'

import { useRef, useState } from "react"
import axios from "axios";

const FileUploaderModalContent = () => {
    const [uploading, setUploading] = useState(false);
    const [selectedImage, setSelectedImage] = useState("");
    const [selectedFile, setSelectedFile] = useState<File>();
    return (
        <div className="flex-col flex gap-4">
            <h3 className="text-center font-blod text-xl">Upload Files</h3>
            <label className="flex flex-col gap-3" >
                <input onChange={({ target }) => {
                    if (target.files) {
                        const file = target.files[0]
                        setSelectedImage(URL.createObjectURL(file))
                        setSelectedFile(file)


                    }
                }
                } type="file" className="bg-[rgb(3,0,28)] p-2 outline-none" name="folder-name" placeholder="Folder name ..." />
                <button onClick={async () => {
                    setUploading(true);
                    try {
                        if (!selectedFile) return;
                        const formData = new FormData();
                        formData.append("myImage", selectedFile);
                        const req = await fetch("/api/file", {
                            headers: {
                                "PATH" : "books"
                            },
                            method: "POST",
                            body: formData
                        });

                        const res = await req.json();

                    } catch (error: any) {
                        console.log(error.response?.data);
                    }
                    setUploading(false);
                }} disabled={uploading ? true : false} className="bg-[#301E67] rounded p-2 cursor-pointer" >{uploading ? "Uploading...." : "Upload"}</button>
            </label>
        </div>
    )
}

export default FileUploaderModalContent