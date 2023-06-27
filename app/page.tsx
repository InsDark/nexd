
import {readdirSync} from 'fs'

export default function Home() {
  const data = readdirSync('D:/')

  return (
    <>
      <h1>Home Page</h1>
      
    </>
  )
}
