import * as functions from 'firebase-functions';
import * as express from 'express';
import { addEntry, getAllEntries, updateEntry, deleteEntry } from './entryController';

const app = express();

app.get('/', (request, response) => response.status(200).send('Hey there!'))
app.post('/api/entries', addEntry)
app.get('/api/entries', getAllEntries)
app.patch('/api/entries/:entryId', updateEntry)
app.delete('/api/entries/:entryId', deleteEntry)

exports.app = functions.https.onRequest(app);