
import {readdirSync} from 'fs'
export const  getFiles = (path : string ) => {
    try {
        const files = readdirSync(path)
        return files

    } catch(error) {
        return []
    }
}