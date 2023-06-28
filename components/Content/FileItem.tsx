'use client'
import { useRouter } from 'next/navigation'
import React from 'react'

import { FaFilePdf, FaFileImage, FaFolder, FaFileWord, FaDownload } from 'react-icons/fa'
const FileItem = ({ content, path  }: { content: string, path: string }) => {
    const router = useRouter()
    const parsedRoute = path.replaceAll('/', '-')
    return (

        <div onClick={() => {
            path === '' ? router.push(`${content}`) : router.push(`${parsedRoute}-${content}`)
        }} className='bg-slate-800 text-[#fff] justify-between items-center flex p-4 hover:bg-[#301E67]'>
            <h3 className='flex items-center gap-2'>
                <FaFolder size={20} />
                {content}
            </h3>
            <FaDownload cursor={'pointer'} className='hover:bg-[#03001C] p-2' size={35} />
        </div>
    )
}

export default FileItem