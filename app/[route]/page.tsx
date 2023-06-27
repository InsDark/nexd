import { useEffect } from 'react'
import {readdirSync} from 'fs'
import { getFiles } from '@/helpers/getFiles'
import FilesContainer from '@/components/FilesContainer'

const RoutePage = ({params } : {params : {route : string}}) => {
    const {route} = params
    let routeParsed = ''
    routeParsed = route.replaceAll('-', '\\')
    routeParsed = routeParsed.replaceAll('%20', ' ')
    console.log(routeParsed)
    const files = getFiles(`D:\\${routeParsed}`)
  return (
    <main className='bg-slate-800 text-white h-screen'> 
        <h1 className='bg-slate-600 p-4 font-bold text-center text-xl text-white'>{`D:\\${routeParsed}`}</h1>
        {files.length > 0 ? <FilesContainer path={routeParsed} files={files}/> : (<p>No files</p>)}
    </main>
  )
}

export default RoutePage