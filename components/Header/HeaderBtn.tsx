'use client'
import { modalStore } from "@/stores/modalStore"
import { ReactElement } from "react"
interface BtnProps {
    icon : ReactElement,
    title : string,
    modalContent: ReactElement
}
const HeaderBtn = ( {icon, title, modalContent} : BtnProps) => {
  const { setIsOpen, setContent } = modalStore(state => state)
  return (
    <>
      <button onClick={() => {
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