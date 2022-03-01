import * as functions from 'firebase-functions';
import * as express from 'express';

// Start writing Firebase Functions
// https://firebase.google.com/docs/functions/typescript

const app = express();

app.get('/', (request, response) => response.status(200).send('Hey there!'))

exports.app = functions.https.onRequest(app);

// export const helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });
