'use client'
import { getFileType } from '@/helpers/getFileType'
import { useRouter } from 'next/navigation'
import React from 'react'

import { FaDownload } from 'react-icons/fa'
const FileItem = ({ content, path  }: { content: string, path: string }) => {
    const router = useRouter()
    const parsedRoute = path.replaceAll('/', '-')
    const {fileIcon, fileType} =  getFileType(content)
    return (

        <div onClick={!fileType ? () => {
            path === '' ? router.push(`${content}`) : router.push(`${parsedRoute}-${content}`)
        } : () => {}} className='bg-slate-800 text-[#fff] justify-between items-center flex p-4 hover:bg-[#301E67]'>
            <h3 className='flex items-center gap-2'>
                {fileIcon}
                {content}
            </h3>
            {fileType ? 
            <a href={`/api/file/${parsedRoute}-${content}`} download>
                <FaDownload cursor={'pointer'} className='hover:bg-[#03001C] p-2' size={35} />
            </a>
            : null
            }
        </div>
    )
}

export default FileItem