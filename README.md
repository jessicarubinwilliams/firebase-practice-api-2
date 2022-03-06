To run the API on your local server: `npm run serve`
To deploy the API to Firebase: 

## Tutorials Used:

This project was originally created by more or less following the YouTube tutorial [Build a Serverless API with Firebase cloud functions, TypeScript and Firestore](https://youtu.be/T8SZv6h2WbY). There is also a related [written tutorial](https://blog.logrocket.com/rest-api-firebase-cloud-functions-typescript-firestore/) and [GitHub repo](https://github.com/ebenezerdon/journal-rest-api).  

It was then further developed 
by following additional YouTube tutorials:  
[How to build a REST API with Node js & Express](https://youtu.be/pKd0Rpw7O48)  
[Firebase Node REST API | Firestore | Babel | REST | API](https://youtu.be/DO-PROnaVwo)  
[Building a RESTful API with Cloud Functions and Firestore](https://youtu.be/XY5WCkgVfPk)  

## Tutorials Notes:

[How to build a REST API with Node js & Express](https://youtu.be/pKd0Rpw7O48)  
20:20-30:10 Get functionality for a single entry, includes query parameters and error handling  
36:00-44:10 Input validatin with [joi](joi.dev) validation library  
44:10-52:30 Update functionality using Put route instead of Patch route  
48:00-48:50 refactor to DRY duplicate input validation code  
52:30-55:23 Delete functionality with input validation  
55:24-57:30 Fix bug in input validation  

[Firebase Node REST API | Firestore | Babel | REST | API](https://youtu.be/DO-PROnaVwo)

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

[Building a RESTful API with Cloud Functions and Firestore Play List](https://youtu.be/XY5WCkgVfPk) 

[03 - Basic Structure in JS Web App](https://youtu.be/XY5WCkgVfPk)  
4:30 import cors from firebase-functions


## More Tutorials to Check Out in the Future
[Cloud functions for Firebase - Complete Tutorial (incl. Firebase Emulator)](https://youtu.be/gA6WGYQWrKc)

## Stretch Goals:

* add esLint dependency
* functions/src/config/firebase.ts: Figure out how to use ES6 import statement rather than require for the Firebase Functions Admin SDK Private Key .json file
* functions/src/index.ts: add custom validation (e.g. checks whether an entry exists before trying to update it, check whether a users inputs are present and appropriate), authentication & authorization middleware for post route as mentioned at 37:55 and again at 59:05. The video author suggests [his article on Handling user authentication with Firebase](https://blog.logrocket.com/user-authentication-firebase-react-apps/) in your React apps even though this isn't a React app.
* functions/src/entryController.ts: Add more custom middleware validation for the APIs create route for calls that don't include all the required fields. Currently the API returns a 500 error but it should return a user input error. This should be caught with middleware before it is even sent to Firestore. This suggestion is made in the video at 40:15.
* functions/src/entryController.ts: Address error on line 32, 43, 74 & 98: Object is of type 'unknown'.ts(2571).
* add the Firebase console locally