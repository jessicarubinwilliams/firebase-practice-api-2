import * as admin from "firebase-admin";
const serviceAccount = require("./../../.firebase/functions-adminsdk-private-key.json");

const firebaseConfig = {
  credential: admin.credential.cert(serviceAccount),
  databaseURL: process.env.FIRESTORE_DATABASE_URL,
};

const app = admin.initializeApp(firebaseConfig);
const db = admin.firestore(app);

export default db;
