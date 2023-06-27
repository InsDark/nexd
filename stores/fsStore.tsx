import {create} from 'zustand'

interface fsStore {
    path: string,
    args: string,
}

export const fsStore = create<fsStore>((set) => ({
    path: "D:\\",
    args: ""
}))