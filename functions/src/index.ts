import * as functions from 'firebase-functions';
import * as express from 'express';
const cors = require('cors');
import { addEntry, getAllEntries, getEntry, updateEntry, deleteEntry } from './entryController';

const app = express();

//Automatically allow cross-origin requests
//See relevant Firebase documentation https://firebase.google.com/docs/functions/http-events
app.use(cors( { origin: true } ));

//Routes
//Format: app.METHOD(PATH, HANDLER) where `app` is an instance of Express.js (which is built upon & adds functionality to the Node.js built-in html component) and the `HANDLER` is a function imported from entryController.ts and used as a callback. 

app.get('/', (request, response) => response.status(200).send('Please note this API\'s CRUD routing begins with `api/entries`'))

//Create
app.post('/api/entries', addEntry)

//Read
app.get('/api/entries', getAllEntries)
app.get('/api/entries/:entryId', getEntry)

//Update
app.patch('/api/entries/:entryId', updateEntry)

//Delete
app.delete('/api/entries/:entryId', deleteEntry)

//Export the API (the express app) using https to Firebase Cloud Functions
//See relevant Firebase documentation https://firebase.google.com/docs/functions/http-events
exports.app = functions.https.onRequest(app);