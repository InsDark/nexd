import {create} from 'zustand'

interface fsStore {
    path: string,
    setPath: (path: string) => void
}

export const fsStore = create<fsStore>((set) => ({
    path: "D:\\",
    setPath: (newPath: string) => set({path: newPath})
}))