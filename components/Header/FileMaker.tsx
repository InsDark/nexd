'use client'
import { modalStore } from "@/stores/modalStore"
import { FaFolderPlus } from "react-icons/fa"
import FileMakerModalContent from "./FileMaker/FileMakerModalContent"
const FileMaker = () => {
  const { setIsOpen, setContent } = modalStore(state => state)
  return (
    <>
      <button onClick={() => {
        setIsOpen(true)
        setContent(<FileMakerModalContent/>)
      }} className="hover:bg-[#301E67] gap-2 outline-none p-4 flex text-white items-center">
        <FaFolderPlus className=" text-white" size={20} color="white" title="make dir" />
        Make Folder
      </button>
    </>
  )
}


export default FileMaker