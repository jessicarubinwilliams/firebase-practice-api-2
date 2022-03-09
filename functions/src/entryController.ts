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

//See Express.js documentation on Basic Routing to understand the syntax of the functions below https://expressjs.com/en/starter/basic-routing.html & https://expressjs.com/en/guide/routing.html
//All the functions below are handlers that will be exported to index.ts and then inserted into a route

//Create
const addEntry = async (req: Request, res: Response) => {
  //object destructuring syntax
  const { title, text } = req.body
  try {
    //access the Firestore database and add a new entry to the entries collection with the .doc()
    //See Firebase documentation https://firebase.google.com/docs/firestore/query-data/get-data for info on Firebase's .doc() as well as .collection()
    const entry = db.collection('entries').doc()
    //In the line above we're actually creating a document with just and auto assigned id in the entries collection and then updating that document to include title and text below
    const entryObject = {
      id: entry.id,
      title,
      text
    }
    //.set() is a Firebase/Firestore method https://firebase.google.com/docs/firestore/manage-data/add-data#web-version-8_2
    await entry.set(entryObject)
    //.send() is an express.js method http://expressjs.com/en/api.html#res.send
    res.status(200).send({
      status: 'success',
      message: 'entry added succesfully',
      data: entryObject
    })
  } catch (error) {
    //Soren Jorgensen Tutorial uses express's .send() instead of .json() See the express documentation http://expressjs.com/en/api.html#res.send http://expressjs.com/en/api.html#res.json
    res.status(500).json(error.message)
    }
}

// Read
const getAllEntries = async (req: Request, res: Response) => {
  //See Firebase documentation https://firebase.google.com/docs/firestore/query-data/get-data and https://firebase.google.com/docs/database/web/read-and-write for info on Firebase's .collection, .get(), .data()
  //See the Express.js documentation on .json() http://expressjs.com/en/api.html#res.json
  try {
    //creates an empty array in Typescript
    const allEntries: EntryType[] = []
    const querySnapshot = await db.collection('entries').get()
    //doc is type any as couldn't find the correct type for a Firestore document
    //To see this return just the entry data without the entryId see commit 5ddd81e600568d03be4917a44742ee363fe8caa4
    querySnapshot.forEach((doc: any) => {
      const entryObject = {
        id: doc.id,
        ...doc.data()
      }
      allEntries.push(entryObject)});
    return res.status(200).json(allEntries)
  } catch(error) { 
    return res.status(500).json(error.message)
  }
}

const getEntry = async (req: Request, res: Response) => {
  const { params: { entryId } } = req
  try {

    const entry = db.collection('entries').doc(entryId)
    const querySnapshot = await entry.get();
    const response = {
      id: querySnapshot.id,
      ...querySnapshot.data()
    };
    return res.status(200).json(response)
  } catch(error) { 
    return res.status(500).json(error.message)
  }
}

//Update
const updateEntry = async (req: Request, res: Response) => {
  const { body: { text, title }, params: { entryId } } = req
  //See Firebase documentation https://firebase.google.com/docs/firestore/query-data/get-data for info on Firebase's .collection(), .doc(), .data(), .set() & .update()
  try {
    const entry = db.collection('entries').doc(entryId)
    const currentData = (await entry.get()).data() || {}
    
    const entryObject = {
      title: title || currentData.title,
      text: text || currentData.text,
    }
    //Soren Jorgensen tutorial uses .update() instead of .set()
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
  //See Firebase documentation for .delete() https://firebase.google.com/docs/firestore/manage-data/delete-data
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

export { addEntry, getAllEntries, getEntry, updateEntry, deleteEntry };