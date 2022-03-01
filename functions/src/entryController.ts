import { Response } from 'express';
import db from './config/firebase';

type EntryType = {
  title: string,
  text: string
}

type Request = {
  body: EntryType,
  params: { entryId: string }
}

const addEntry = async (req: Request, res: Response) => {
  const { title, text } = req.body
  try {
    const entry = db.collection('entries').doc()
    const entryObject = {
      id: entry.id,
      title,
      text
    }

    await entry.set(entryObject)

    res.status(200).send({
      status: 'success',
      message: 'entry added succesfully',
      data: entryObject
    })
  } catch(error) {
    res.status(500).json(error.message)
  }
}

export { addEntry };