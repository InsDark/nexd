
import {readdirSync} from 'fs'
export const  getFiles = (path : string ) => {
    try {
        const files = readdirSync(`D:\\${path}`)
        return files

    } catch(error) {
        return []
    }
}