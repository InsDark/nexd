
import React from 'react'
import { readFileSync } from 'fs'

import FileItem from './FileItem'
import { getFiles } from '@/helpers/getFiles'
const FilesContainer = ({  path }: {  path: string }) => {
    const files = getFiles(path)
    return (
        <section className='bg-[#03001C] gap-4  flex flex-col  text-white p-4'>
            <h2 className='text-center font-bold text-xl'>Content</h2>
            {files.map(file => <FileItem content={file}/>)}
        </section>
    )
}

export default FilesContainer