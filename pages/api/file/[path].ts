export const config  = {
    api: {
        responseLimit: false
    }
}

import { CONSTANTS } from '@/helpers/Constans'
import { readFile } from 'fs/promises'
import { NextApiRequest, NextApiResponse } from 'next'
interface Request extends NextApiRequest {
    query: {
        path: string
    }
}
const expoFile = async (req: Request, res: NextApiResponse) => {
    if (req.method !== 'GET') return
    const { path }: { path: string } = req.query
    
    let parsedPath = ''

    parsedPath = path.replaceAll(CONSTANTS.FILESEPARATOR, "\\")

    try {
        const fileData = await readFile(`D:\\${parsedPath}`)
        res.end(fileData)
    } catch (e : any) {
        res.write(JSON.stringify({ error: e.message }))
    }
}

export default expoFile
