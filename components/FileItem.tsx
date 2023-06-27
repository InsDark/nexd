'use client'
import { useRouter } from 'next/navigation'
import React from 'react'

import { FaFilePdf, FaFileImage, FaFolder } from 'react-icons/fa'
const FileItem = ({ content }: { content: string }) => {
    const router = useRouter()
    let item = <></>;
    let fileType = ''
    if (content.endsWith('.pdf')) {
        console.log(content, 'its a pdf')
        item = <FaFilePdf size={20} />
        fileType='pdf'
    } else if (content.endsWith('.png' || ".jpg")) {
        {
            console.log(content, 'its a image')
            item = <FaFileImage size={20} />
            fileType='image'
        }

    } else {
        console.log(content, 'its a folder')
        item = <FaFolder size={20} />
        fileType='folder'
    }
    return (

        <div onClick={( ) => {
            if(fileType == 'folder') {
                console.log('I am folder')
                router.push(`/books-${content}`)
            }
        }} className='flex gap-2 items-center bg-slate-900 p-4 hover:bg-slate-700'>{item} { content} <button onClick={() => {
            
        }}></button></div>
    )
}

export default FileItem