import React from 'react'
import { readFileSync } from 'fs'
import FileItem from './FileItem'
const FilesContainer = ({ files, path }: { files: string[], path: string }) => {
    files.forEach(file => {
        try {

            // const data = readFileSync(`D:\\${path}\\${file}`)
            // console.log(data)
        } catch (e) {
            console.log(e)
        }


    })
    return (
        <>
            {files.map((file, index) => {

                return (
                    <FileItem content={file} />
                )

            })}
        </>
    )
}

export default FilesContainer