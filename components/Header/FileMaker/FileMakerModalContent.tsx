'use client'

import { useState } from "react"

const FileMakerModalContent = () => {
    const [folderName, setFolderName] = useState('')
    return (
        <div className="flex-col flex gap-4">
            <h3 className="text-center font-blod text-xl">Create A Folder</h3>
            <form className="flex flex-col gap-3" onSubmit={(e) => { e.preventDefault() }}>
                <input value={folderName} onChange={(e) => {
                    setFolderName(e.target.value)
                }} type="text" className="bg-[rgb(3,0,28)] p-2 outline-none" name="folder-name" placeholder="Folder name ..." />
                <input type="submit" className="bg-[#301E67] rounded p-2 cursor-pointer" value="Make Folder" />
            </form>
        </div>
    )
}

export default FileMakerModalContent