'use client'

import { uploadFiles } from "@/helpers/uploadFiles";
import { useState } from "react"

const FileUploaderModalContent = () => {
    const [uploading, setUploading] = useState(false);
    const [selectedFiles, setSelectedFiles] = useState<File[]>([]);
    return (
        <div className="flex-col w-full sm:w-[20rem] flex gap-4">
            <h3 className="text-center font-blod text-xl">Upload Files</h3>
            <form className="flex flex-col gap-3">
                <label htmlFor="inputFiles"></label>
                <input onChange={({ target }) => {
                    if (target.files) {
                        const files = Array.from(target.files)
                        const filesToUpload: File[] = []
                        files.forEach(file => {
                            filesToUpload.push(file)
                        })
                        setSelectedFiles(filesToUpload)
                    }
                }
                } multiple type="file" className="bg-[rgb(3,0,28)] p-2 outline-none" name="inputFiles" />
                <input type="reset" 
                onClick={ async() =>{ 
                    setUploading(true)
                    const res = await uploadFiles({selectedFiles})
                    if(res?.status == 200) {
                        setSelectedFiles([])
                        setUploading(false)
                        return
                    }
                    alert('No files to upload')
                    setUploading(false)
                }} 
                disabled={uploading ? true : false} className="bg-[#301E67] rounded p-2 cursor-pointer" value={uploading ? "Uploading...." : "Upload"} />
            </form>
        </div>
    )
}

export default FileUploaderModalContent