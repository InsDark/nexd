import {  FaFileUpload, FaFolderPlus } from "react-icons/fa"
import { FaArrowUpFromBracket } from 'react-icons/fa6'
import HeaderBtn from "./HeaderBtn"
import FileMakerModalContent from "./FileMakerModalContent"
import FileUploaderModalContent from "./FIleUploaderModalContent"
const Header = ({ route }: { route: string }) => {
    let parsedRoute = ""
    parsedRoute = route.replaceAll('-', '\\')
    parsedRoute = parsedRoute.replaceAll('%20', ' ')
    return (
        <header className="flex-col  bg-[#03001C] sticky top-0">
            <h1 className="text-white p-3 text-center text-xl">{`D:\\${parsedRoute}`}</h1>
            <nav className="flex justify-around">
                <HeaderBtn title="Make Folder" icon={<FaFolderPlus size={20} color="white" />} modalContent={<FileMakerModalContent />} />

                <HeaderBtn title="Upload File" icon={<FaFileUpload size={20} color="white" />} modalContent={<FileUploaderModalContent />} />

                <HeaderBtn route={parsedRoute} modalContent={<></>} title="Up Folder" icon={<FaArrowUpFromBracket size={20} color="white" />}  />


            </nav>
        </header>
    )
}

export default Header