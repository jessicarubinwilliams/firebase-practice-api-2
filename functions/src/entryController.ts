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

//See Express.js doucmentatin on Basic Routing to understand the syntax of the functions below https://expressjs.com/en/starter/basic-routing.html & https://expressjs.com/en/guide/routing.html

//Create
const addEntry = async (req: Request, res: Response) => {
  const { title, text } = req.body
  try {
    //access the Firestore database and add a new entry to the entries collection with the .doc()
    //See Firebase documentation https://firebase.google.com/docs/firestore/query-data/get-data
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

// Read
const getAllEntries = async (req: Request, res: Response) => {
  try {
    const allEntries: EntryType[] = []
    const querySnapshot = await db.collection('entries').get()
    querySnapshot.forEach((doc: any) => allEntries.push(doc.data()))
    return res.status(200).json(allEntries)
  } catch(error) { 
    return res.status(500).json(error.message)
  }
}

//Update
const updateEntry = async (req: Request, res: Response) => {
  const { body: { text, title }, params: { entryId } } = req
  
  try {
    const entry = db.collection('entries').doc(entryId)
    const currentData = (await entry.get()).data() || {}
    
    const entryObject = {
      title: title || currentData.title,
      text: text || currentData.text,
    }
    
    await entry.set(entryObject).catch(error => {
      return res.status(400).json({
        status: 'error',
        message: error.message
      })
    })
    
    return res.status(200).json({
      status: 'success',
      message: 'entry updated successfully',
      data: entryObject
    })
  }
  catch(error) { 
    return res.status(500).json(error.message)
  }
}

//Delete
const deleteEntry = async (req: Request, res: Response) => {
  const { entryId } = req.params
  
  try {
    const entry = db.collection('entries').doc(entryId)
    
    await entry.delete().catch(error => {
      return res.status(400).json({
        status: 'error',
        message: error.message
      })
    })
    
    return res.status(200).json({
      status: 'success',
      message: 'entry deleted successfully'
    })
  }
  catch(error) { 
    return res.status(500).json(error.message)
  }
}

export { addEntry, getAllEntries, updateEntry, deleteEntry };