import {read, readFile, readFileSync} from 'fs'
import { NextApiRequest, NextApiResponse } from 'next'
const expoFile = (req : NextApiRequest, res : NextApiResponse) => {
    if(req.method !== 'GET') return  
    const {path} : {path: string}  = req.query  
    let parsedPath = ''
    parsedPath = path.replaceAll("-", "\\")
    const hrstart = process.hrtime()

    readFile(`D:\\${parsedPath}`, (err, data) => {
        if(err) {
            res.write(JSON.stringify({
                error: err.message
            }))
            res.end()
            return
        }
        res.end(data)
    })
    console.log('Time', `${process.hrtime(hrstart)[1]/1000000} ms`)
}   

export default expoFile