To run the API on your local server: `$ npm run serve`  
To deploy the API to Firebase: `practice-api-2/functions$ npm run deploy`  

## Concepts Needed

* JavaScript
* RESTful APIs
* CRUD
* The general concept of internet protocols
* HTTP protocol & HTTP Transactions
* HTTP module
* HTTP get method query parameters
* JS window object
* Node.js
* Node.js server global environment
* Node.js built-in http module
* Node.js 
* Node.js/Express.js request & response objects
* Express.js
* Express.js routing & app.METHOD in express
* Firebase including Firebase functions & hosting
* Firestore database
* Typescript

## Key Documentation & Tutorials for Understanding building a Serverless API using Firebase Cloud Functions for Hosting & Express.js Middleware
Suggested way to proceed with the Firebase Docs if trying to learn how to do what this project does: start with these and then work your way out by clicking links that interest you within these articles. Skim these before watching the Tutorials but don't expect them to fully make sense until after you've done atleast one if not more of the tutorials.  

_Important note: I didn't understand the official Firebase documentation nearly as well before watching the tutorial videos below as I did after watching them. If this is all brand new to you, don't stress if the documentation is not initally easy to understand. It will make sense with time and exposure. There are lots of other resouces online to help the very beginner._  

JAVASCRIPT  
RESTFUL APIS & CRUD  

JS WINDOW OBJECT  
[Differences Between the Window and Document for JavaScript Development](https://youtu.be/03WYBVjIMfQ) *Video   
[Window Object Introduction | Javascript tutorial for beginners | Javascript full course](https://youtu.be/Bg2-9kGGIyw) *Video  

INTERNET PROTOCOLS  
HTTP PROTOCOL & HTTP TRANSACTIONS  
HTTP METHODS  
HTTP GET METHOD QUERY PARAMETERS  
NODE.JS  

NODE.JS SERVER GLOBAL ENVIRONMENT  
[Node.js - The Server Global Environment](https://youtu.be/9S4Ko3IF5oA) *Video  

NODE.JS BUILT-IN HTTP MODULE  
[Node.js - Core Module: http](https://youtu.be/8eyHlxWf4AQ) *Video  

NODE.JS

NODE.JS/EXPRESS.JS REQUEST & RESPONSE OBJECTS  
[Node.js | Express.js - Request & Response Object in Express](https://youtu.be/TQEdpT6DIKo) *Video  
[Request object in express](https://youtu.be/S3PJylHxQsE) *Video  

EXPRESS.JS  
[Express.js - Intro](https://youtu.be/nEVkl--1Rx4) *Video    
[Express.js - Middleware](https://youtu.be/1_o4BNABaqo) *Video  

EXPRESS.JS ROUTING & app.METHOD  
[Basic Routing](https://expressjs.com/en/starter/basic-routing.html)  
[Routing](https://expressjs.com/en/guide/routing.html)  
[express() Methods](https://expressjs.com/en/4x/api.html#express)  

FIREBASE INCLUDING FIREBASE FUNCTIONS & HOSTING  
[Get Started with Firebase - Add Firebase to a server](https://firebase.google.com/docs/admin/setup) - This is a tricky one. I used multiple other resources in coordination with this one to find the sytnax that worked for my project.  
[Firebase CLI reference - Overview](https://firebase.google.com/docs/cli)  
[Firebase Hosting - Introduction](https://firebase.google.com/docs/hosting)  
[Firebase Hosting - Get Started](https://firebase.google.com/docs/hosting/quickstart)  
[Serve dynamic content and host microservices using Firebase Hosting - Overview](https://firebase.google.com/docs/hosting/serverless-overview)  
[Serve dynamic content and host microservices using Firebase Hosting - Use Cloud Functions for Firebase](https://firebase.google.com/docs/hosting/functions)  
[Cloud Functions - Call functions via HTTP requests](https://firebase.google.com/docs/functions/http-events)  
[Cloud Functions - Write Functions: Manage deployment & runtime options](https://firebase.google.com/docs/functions/manage-functions)  

FIRESTORE DATABASE  
[Querying data - Getting data](https://cloud.google.com/firestore/docs/query-data/get-data)  
[Querying data - Querying and filtering](https://cloud.google.com/firestore/docs/query-data/queries)  
[Querying data - Ordering and limiting](https://cloud.google.com/firestore/docs/query-data/order-limit-data)  

TYPESCRIPT  
[Cloud Functions - Write Functions: Use TypeScript for Cloud Functions](https://firebase.google.com/docs/functions/typescript)  
[Typerscript for JavaScript Programmers in 5 Minutes](https://www.typescriptlang.org/docs/handbook/typescript-in-5-minutes.html)  

## Tutorials Used:

This project was originally created by more or less following the YouTube tutorial [Build a Serverless API with Firebase cloud functions, TypeScript and Firestore](https://youtu.be/T8SZv6h2WbY). There is also a related [written tutorial](https://blog.logrocket.com/rest-api-firebase-cloud-functions-typescript-firestore/) and [GitHub repo](https://github.com/ebenezerdon/journal-rest-api).  

It was then further developed 
by following additional YouTube tutorials:  
[How to build a REST API with Node js & Express](https://youtu.be/pKd0Rpw7O48)  
[Firebase Node REST API | Firestore | Babel | REST | API](https://youtu.be/DO-PROnaVwo)  
[Building a RESTful API with Cloud Functions and Firestore](https://youtu.be/XY5WCkgVfPk)  

## Tutorials Notes:

[Build a Serverless API with Firebase cloud functions, TypeScript and Firestore](https://youtu.be/T8SZv6h2WbY) from Ebenezer Don  
  
SETUP   
2:10-5:15 Create Firebase project  
5:15-9:00 Set up billing for Firebase functions - deployment  
9:00-10:25 Set up Firestore database in _production mode_, not test mode. Database is accessed with ServiceAccount credentials later in video  
10:25-11:50 Install Node.js & FirebaseTools CLI  
11:50-14:02 Use CLI to login to Firebase in the terminal `$ firebase login` & create new Firebase function `$ firebase init functions`  
14:03-15:10 Overview of the file structure created by `$ firebase init functions`  
15:10-17:07 Explain, deploy `practice-api-2/functions$ npm run deploy` & test in Postman first Cloud Function (default  `helloWorld()`)  
--Related Firebase Documentation: [Manage functions deployment and runtime options](https://firebase.google.com/docs/functions/manage-functions)
17:07-19:05 Introduce & set up Express.js Middleware  
19:06-20:29 Explain, deploy & test in Postman first original/non-default Cloud Function (`app()`)  
20:30-29:30 Create Firebase service account to access the Firestore database with the Firebase Admin SDK & link express app to Firebase/Firestore  
--This set up is out of date but still helpful to watch. After much trial & error, I used these additioanal resources to link the express app to Firebase/Firestore: Firebase Docs [Add the Firebase Admin SDK to your server ](https://firebase.google.com/docs/admin/setup) & [Configure your environment ](https://firebase.google.com/docs/functions/config-env) and Medium articles [Configuring Firebase Admin SDK with Express](https://medium.com/@tanya/configuring-firebase-admin-sdk-with-express-931b02ee2f91) & Medium article [Firebase: Separating configuration from code in Admin SDK](https://medium.com/google-cloud/firebase-separating-configuration-from-code-in-admin-sdk-d2bcd2e87de6)  
29:31-31:41 Create controller  

CREATE  
31:42-37:15 Add Create functionality to controller with try-catch error handling - `addEntry()`  
37:15-37:08 Add Create functionality to index.ts - add post route  
37:55 & 59:27 both mention need to add custom validation (e.g. checks whether an entry exists before trying to update it, check whether a users inputs are present and appropriate), authentication & authorization middleware and where that would go in the code  
38:08 Redploy application & test in Postman  
40:53 Demo in Postman why the custom validation of user input is needed  
41:04 View new data in Firestore database  
  
GET - getAll() only, no get()  
41:53 Add Get functionality to controller with try-catch error handling - `getAllEntries()`  
44:55 Screen shot of `entryController.ts` code for `getAll()` before we preparse the Firebase return. Uses Firebase's .get() to get all the entries and then uses Firebase's .docs() to return an array of all the documents in the QuerrySnapshot. See relevant [Firebase documentation](https://firebase.google.com/docs/reference/node/firebase.firestore.QuerySnapshot#docs)   
45:04 Add Get functionality to index.ts - add get route  
45:25 Redploy application & test in Postman
46:00 Screenshot of the original return from Firebase before we preparse it - includes the document's id at this point  
46:53 Update `getAllEntries()` to preparse the Firestore response and only return wanted data to the user of our API
49:31 Redploy application to Firebase & test in Postman
  
UPDATE  & DELETE  
49:57 Add Update functionality to controller with try-catch error handling - `updateEntry()`  
54:38 Add Delete functionality to controllwer with try-catch error handling - `deleteEntry()`  
55:57 Add Update & Delete functionality to index.ts -add patch & delete routes  
56:57 Redploy application to Firebase & test in Postman

[How to build a REST API with Node js & Express](https://youtu.be/pKd0Rpw7O48) from Programming with Mosh  
20:20-30:10 Get functionality for a single entry, includes query parameters and error handling  
36:00-44:10 Input validatin with [joi](joi.dev) validation library  
44:10-52:30 Update functionality using Put route instead of Patch route  
48:00-48:50 refactor to DRY duplicate input validation code  
52:30-55:23 Delete functionality with input validation  
55:24-57:30 Fix bug in input validation  

[Firebase Node REST API | Firestore | Babel | REST | API](https://youtu.be/DO-PROnaVwo) from Mahesh Kariya  

Makes MVC(MRC?) architecture more clear but does not deploy to Firebase (does use Firestore database)
 
_Project structure_  
`config/`  
--`index.js`  
`models/`  
--`user.js` (contains user class with constructor)  
`routes/`  
--`user.js` (contains routes)  
`controllers/`  
--`user.js` (contains functions)  
`app.js`

_Compared to my project structure (as created in first tutorial from Ebenezer Don)_

my `index.ts` = his `app.js` & his `routes/user.js`  
my `entryController.ts` = his `controllers/user.js`  
my `config/firebase.ts` = his `config/index.js`  

SETUP  
10:57-12:05 `models/user.js`  
12:10-14:55 `routes/user.js`  
--16:15 screenshot of `routes/user.js`  
14:55-17:10 `controllers/user.js`  
--33:21 update to `get()`  
17:10-24:15 `config/index.js` includes .env & firebase project set in the web app  
--23:51 screenshot of `config/index.js`  

READ  
getAll  
24:15-28:09 `routes/user.js` getAll  
28:09-29:18 `app.js` update setup  
29:18-33:10 test getAll in Postman equivalent  
get  
33:10-33:51 video magically skips from getAll to get

CREATE  
33:52-35:18 controllers/user.js create  
35:19-36:50 test create functionality in Postman equivalent  
--36:13-36:35 update `controllers/user.js` create()  

UPDATE  
36:50-38:14 Update  
--37:12 `routes/user.js` update()  
--37:16 `controllers/user/js` update()  
--38:04 test

DELETE  
38:15-39:27 Delete  
--38:15 `routes/user.js` delete()  
--38:20 `controllers/user.js` delete()  
--39:02 test  

[Building a RESTful API with Cloud Functions and Firestore Play List](https://youtu.be/XY5WCkgVfPk) from Soren Spangsberg Jorgensen  
  
SETUP  
[03 - Basic Structure in JS Web App](https://youtu.be/XY5WCkgVfPk)  
4:30 import cors into index.js  
[04 - Create Route and Service Account](https://youtu.be/dKoQnNylxm8)  
0:45 Authenticate the app in Firebase with Firebase Admin SDK. DOES NOT USE .env  
2:53 enable cors  
  
CREATE  
3:45 Create Functionality  
7:56 Deploy to local server & test in Postman  
  
READ  
[05 - Read Product Route](https://youtu.be/VBToNDd5GUQ)  
0:37 `get()` for a single entry  
2:57 Deploy to local server & test in Postman  
[06 - Read all Products Route](https://youtu.be/KXLOs2J6ypM)  
0:16 `getAll()` for all entries  
4:28 review of what each section of code within `getAll()` does  
5:27 Deploy to local server & test in Postman  

UPDATE & DELETE  
[07 - Update and Delete Product Routes](https://youtu.be/eeGc9SpoWC4)  
0:32 `update()`  
2:57 Deploy to local server & test in Postman  
5:07 `delete()`  
6:17 Deploy to local server & test in Postman  

DEPLOY TO FIREBASE
[08 - Deploy and re-test with Postman](https://youtu.be/iENCphlznek)
0:10 Deploy using Firebase CLI - no set up instructions offered, see Ebenezer Don's video
1:43 Test in Postman

## More Tutorials to Check Out in the Future  
[Cloud functions for Firebase - Complete Tutorial (incl. Firebase Emulator)](https://youtu.be/gA6WGYQWrKc)  
Try catch blocks in Typescript online articles: [Get a catch block error message with TypeScript](https://kentcdodds.com/blog/get-a-catch-block-error-message-with-typescript), [How to strongly type try/catch blocks in TypeScript](https://medium.com/geekculture/how-to-strongly-type-try-catch-blocks-in-typescript-4681aff406b9), [Try Catch Statement in TypeScript
](https://www.c-sharpcorner.com/UploadFile/5089e0/try-catch-statement-in-typescript/)  

## Stretch Goals:

* add esLint dependency
* Update the syntax of all the Firebase methods from that of Web version 8 which is namespaced (as was demonstrated in all the video tutorials) to the syntax of Web verion 9 which is modular. See the [Firebase documentation](https://firebase.google.com/docs/firestore/query-data/get-data#web-version-9)
* functions/src/config/firebase.ts: Figure out how to use ES6 import statement rather than require for the Firebase Functions Admin SDK Private Key .json file
* functions/src/index.ts: add custom validation (e.g. checks whether an entry exists before trying to update it, check whether a users inputs are present and appropriate), authentication & authorization middleware for post route as mentioned at 37:55 and again at 59:05. The video author suggests [his article on Handling user authentication with Firebase](https://blog.logrocket.com/user-authentication-firebase-react-apps/) in your React apps even though this isn't a React app.
* functions/src/entryController.ts: Add more custom middleware validation for the APIs create route for calls that don't include all the required fields. Currently the API returns a 500 error but it should return a user input error. This should be caught with middleware before it is even sent to Firestore. This suggestion is made in the video at 40:15.
* functions/src/entryController.ts: Address error on line 32, 43, 74 & 98: Object is of type 'unknown'.ts(2571).
* add the Firebase console locally