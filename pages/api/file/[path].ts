import { readFile} from 'fs'
import { NextApiRequest, NextApiResponse } from 'next'
interface Request extends NextApiRequest {
    query: {
        path: string
    }
}
const expoFile = (req : Request, res : NextApiResponse) => {
    if(req.method !== 'GET') return  
    const {path} : { path: string} = req.query   
    let parsedPath = ''
    parsedPath = path.replaceAll("-", "\\")

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
}   

export default expoFile