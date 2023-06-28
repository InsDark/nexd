import FilesContainer from '@/components/Content/FilesContainer'
import Header from '@/components/Header/Header'
import Modal from '@/components/Modal'
import { Params } from 'next/dist/shared/lib/router/utils/route-matcher'

export default function RoutePage({params} : Params) {
  const {route} = params
  return (
    <main className='h-screen flex flex-col gap-4 bg-[rgb(3,0,28)] '>
      <Header route={route} />
      <FilesContainer path={route} />
      <Modal/>
    </main>
  )
}