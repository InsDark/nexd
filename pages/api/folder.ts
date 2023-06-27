import { NextApiRequest, NextApiResponse } from 'next'
import {mkdirSync, existsSync} from 'fs'
const folderController = (req : NextApiRequest, res : NextApiResponse) => {
    if(req.method == 'POST') {
        const {path}  : {path: string} = req.body
        if(!existsSync(path)) {
            mkdirSync(path)
            res.send({message: `The folder at ${path} was created sucessfully`})
        } else {
            res.send({message: `There is a folder in ${path}`})
        }
    } else {
        res.send({message: 'This endpoint dont exist' })
    }
}   

export default folderController