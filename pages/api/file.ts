import { NextApiHandler, NextApiRequest } from "next";
import formidable from "formidable";

export const config = {
  api: {
    bodyParser: false,
  },
};

const readFile = (
  req: NextApiRequest,
  filePath?: string
): Promise<{ fields: formidable.Fields; files: formidable.Files }> => {
  
  const options: formidable.Options = {};
  options.uploadDir = `D:\\${filePath}`;
  options.filename = (name, ext, path, form) => {
    const {originalFilename} = path
    console.log(originalFilename)
    return originalFilename + ''
  }

  options.maxFileSize = 4000 * 1024 * 1024;

  const form = formidable(options);

  return new Promise((resolve, reject) => {
    form.parse(req, (err, fields, files) => {
      if (err) reject(err);
      resolve({ fields, files });
    });
  });
};

const handler: NextApiHandler = async (req, res) => {
  const { path } = req.headers
  await readFile(req, path?.toString());
  res.json({ message: 'The files were successfully uploaded' });
};

export default handler;

