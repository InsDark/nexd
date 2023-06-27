import { JSXElementConstructor, ReactElement } from 'react'
import {create} from 'zustand'

interface modalStore {
    isOpen: boolean,
    setIsOpen: (value: boolean) => void,
    content: ReactElement,
    setContent: (item: ReactElement) => void
}

export const modalStore = create<modalStore>((set) => ({
    isOpen: false,
    setIsOpen: (value) => set({isOpen: value}),
    content: <></>,
    setContent: (item) => set({content: item})
}))