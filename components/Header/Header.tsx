'use client'

import { fsStore } from "@/stores/fsStore"
import { FaArrowUp, FaFileUpload, FaFolderPlus, FaUpload, FaUps } from "react-icons/fa"
import { FaArrowUpFromBracket } from 'react-icons/fa6'
import FileMaker from "./FileMaker"
const Header = ({ route }: { route: string }) => {
    const { path, setPath } = fsStore(state => state)

    return (
        <header className="flex-col  flex-[4] bg-[#03001C] ">
            <h1 className="text-white p-3 text-center text-xl">{path}</h1>
            <nav className="flex justify-around">

               <FileMaker/>
                <button className="hover:bg-[#301E67] gap-2 p-4 flex text-white items-center">
                    <FaFileUpload className=" text-white" size={20} color="white" />
                    Upload File
                </button>

                <button className="hover:bg-[#301E67] gap-2 p-4 flex text-white items-center">
                    <FaArrowUpFromBracket className="text-white" size={20} color="white" />
                    Up Folder
                </button>
            </nav>
        </header>
    )
}

export default Header