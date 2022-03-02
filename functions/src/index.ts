import * as functions from 'firebase-functions';
import * as express from 'express';
import { addEntry, getAllEntries } from './entryController';

// Start writing Firebase Functions
// https://firebase.google.com/docs/functions/typescript

const app = express();

app.get('/', (request, response) => response.status(200).send('Hey there!'))
app.post('/entries', addEntry)
app.get('/entries', getAllEntries)

exports.app = functions.https.onRequest(app);

// export const helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });
