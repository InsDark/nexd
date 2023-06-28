import React from 'react'

import FileItem from './FileItem'
import { getFiles } from '@/helpers/getFiles'
const FilesContainer = ({  path }: {  path: string }) => {
    let parsedRoute = path.replaceAll('-', '/')
    parsedRoute = parsedRoute.replaceAll('%20', ' ')
    const files = path ? getFiles(parsedRoute)  : getFiles('')
    return (
        <section className='bg-[#03001C] gap-4  flex flex-col  text-white p-4'>
            <h2 className='text-center font-bold text-xl'>Content</h2>
            {files ? files.map(file => <FileItem path={parsedRoute} content={file}/>) : <h3>No files for this route</h3>}
        </section>
    )
}

export default FilesContainer