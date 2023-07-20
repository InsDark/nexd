'use client'
import { modalStore } from '@/stores/modalStore'
import ReactModal, { } from 'react-modal'

const Modal = () => {
    const { isOpen, setIsOpen, content } = modalStore(state => state)
    return (
        <ReactModal
            isOpen={isOpen}
            onRequestClose={() => {
                setIsOpen(false)
            }}
            ariaHideApp={false}
            contentLabel="Example Modal"
            style={{
                overlay: {
                    "position": "fixed",
                    "inset": "0px",
                    backgroundColor: "rgba(3,0,28, 0.75)"
                }
            }}
            className={'absolute inset-[40px] overflow-auto outline-none p-[20px] rounded bg-slate-900 text-white flex  justify-center items-center'}
        >
            {content}
        </ReactModal >
    )
}

export default Modal