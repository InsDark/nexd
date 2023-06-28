'use client'

import { fsStore } from "@/stores/fsStore"
import { FaArrowUp, FaFileUpload, FaFolderPlus, FaUpload, FaUps } from "react-icons/fa"
import { FaArrowUpFromBracket } from 'react-icons/fa6'
import HeaderBtn from "./HeaderBtn"
import FileMakerModalContent from "./FileMakerModalContent"
import FileUploaderModalContent from "./FIleUploaderModalContent"
const Header = ({ route }: { route: string }) => {
    const { path, setPath } = fsStore(state => state)

    return (
        <header className="flex-col  flex-[4] bg-[#03001C] sticky top-0">
            <h1 className="text-white p-3 text-center text-xl">{path}</h1>
            <nav className="flex justify-around">
                <HeaderBtn title="Make Folder" icon={<FaFolderPlus size={20} color="white" />} modalContent={<FileMakerModalContent />} />

                <HeaderBtn title="Upload File" icon={<FaFileUpload size={20} color="white" />} modalContent={<FileUploaderModalContent />} />

                <button className="hover:bg-[#301E67] gap-2 p-4 flex text-white items-center">
                    <FaArrowUpFromBracket className="text-white" size={20} color="white" />
                    Up Folder
                </button>
            </nav>
        </header>
    )
}

export default Header