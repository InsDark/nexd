import path from "path"
import { ReactElement } from "react"
import { FaFilePdf, FaFileImage, FaFolder, FaFile, FaFileAudio } from 'react-icons/fa'
import { FaFileZipper } from "react-icons/fa6"

const filesTypes = {
    ".rar" : <FaFileZipper/>,
    ".zip" : <FaFileZipper/> ,
    ".pdf" : <FaFilePdf/>,
    ".png" : <FaFileImage/>,
    '.jpg' : <FaFileImage/>
}

const fileTypes = new Map()
fileTypes.set('.rar', <FaFileZipper/>)
fileTypes.set('.zip', <FaFileZipper/>)
fileTypes.set('.7z', <FaFileZipper/>)
fileTypes.set('.pdf', <FaFilePdf/>)
fileTypes.set('.png', <FaFileImage/>)
fileTypes.set('.jpg', <FaFileImage/>)

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