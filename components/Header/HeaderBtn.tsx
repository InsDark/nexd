'use client'
import { modalStore } from "@/stores/modalStore"
import { useRouter } from "next/navigation"
import { ReactElement } from "react"
interface BtnProps {
  icon: ReactElement,
  title: string,
  modalContent: ReactElement,
  route?: string
}
const HeaderBtn = ({ icon, title, modalContent, route }: BtnProps) => {
  const { setIsOpen, setContent } = modalStore(state => state)
  const router = useRouter()
  return (
    <>
      <button onClick={() => {
        if (!modalContent) {
          const routeParts  = route?.split('\\')
          routeParts?.pop()
          const parsedRoute = routeParts?.join('-')
          router.push(`/${parsedRoute}`)
          return
        }
        setIsOpen(true)
        setContent(modalContent)
      }} className="hover:bg-[#301E67] gap-2 outline-none p-4 flex text-white items-center">
        {icon}
        {title}
      </button>
    </>
  )
}


export default HeaderBtn