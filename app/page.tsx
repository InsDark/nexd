
import FilesContainer from '@/components/FilesContainer'
import Header from '@/components/Header'
import { readdirSync } from 'fs'

export default function Home() {
  return (
    <main className='h-screen flex flex-col gap-4 bg-[#03001C] '>
      <Header route='' />
      <FilesContainer path='' />
    </main>
  )
}
