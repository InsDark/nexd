import path from "path"
import { ReactElement } from "react"
import { FaFilePdf, FaFileImage, FaFolder, FaFile, FaFileAudio, FaFileVideo, FaFileWord } from 'react-icons/fa'
import { FaFileZipper } from "react-icons/fa6"

const fileTypes = new Map()
fileTypes.set('.rar', <FaFileZipper/>)
fileTypes.set('.zip', <FaFileZipper/>)
fileTypes.set('.7z', <FaFileZipper/>)
fileTypes.set('.pdf', <FaFilePdf/>)
fileTypes.set('.png', <FaFileImage/>)
fileTypes.set('.jpg', <FaFileImage/>)
fileTypes.set('.mp3', <FaFileAudio/>)
fileTypes.set('.mp4', <FaFileVideo/>)
fileTypes.set('.doc', <FaFileWord/>)
fileTypes.set('.docx', <FaFileWord/>)

export const getFileType = (fileName: string) => {
    const fileType = path.extname(fileName)
    let fileIcon : ReactElement = fileTypes.get(fileType)
    if(!fileIcon) {
        if(!fileType) {
            fileIcon = <FaFolder/>
        }  else {
            fileIcon = <FaFile/>
        }
        
    }
    return { fileIcon, fileType }
}