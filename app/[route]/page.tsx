import { getFiles } from '@/helpers/getFiles'
import FilesContainer from '@/components/FilesContainer'
import Header from '@/components/Header/Header'

const RoutePage = ({params } : {params : {route : string}}) => {
    const {route} = params
    let routeParsed = ''
    routeParsed = route.replaceAll('-', '\\')
    routeParsed = routeParsed.replaceAll('%20', ' ')
    const files = getFiles(`D:\\${routeParsed}`)
  return (
    <main className='bg-slate-800 text-white h-screen w-screen'> 
        {files.length > 0 ? <FilesContainer path={routeParsed} files={files}/> : (<p>No files</p>)}
    </main>
  )
}

export default RoutePage