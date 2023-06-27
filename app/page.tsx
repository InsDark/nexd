import FilesContainer from '@/components/FilesContainer'
import Header from '@/components/Header/Header'
import Modal from '@/components/Modal'

export default function Home() {
  return (
    <main className='h-screen flex flex-col gap-4 bg-[rgb(3,0,28)] '>
      <Header route='' />
      <FilesContainer path='' />
      <Modal/>
    </main>
  )
}
