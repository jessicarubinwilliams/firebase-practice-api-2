## Tutorials Used:

This project was originally created by more or less following the YouTube tutorial [Build a Serverless API with Firebase cloud functions, TypeScript and Firestore](https://youtu.be/T8SZv6h2WbY). There is also a related [written tutorial](https://blog.logrocket.com/rest-api-firebase-cloud-functions-typescript-firestore/) and [GitHub repo](https://github.com/ebenezerdon/journal-rest-api).

It was then further developed by following the YouTube tutorial [How to build a REST API with Node js & Express](https://youtu.be/pKd0Rpw7O48)

## Tutorials to Revisit:

[How to build a REST API with Node js & Express](https://youtu.be/pKd0Rpw7O48)
20:20-30:10 Get functionality for a single entry, includes query parameters and error handling
36:00-44:10 Input validatin with [joi](joi.dev) validation library
44:10-52:30 Update functionality using Put route instead of Patch route
48:00-48:50 refactor to DRY duplicate input validation code
52:30-55:23 Delete functionality with input validation
55:24-57:30 Fix bug in input validation

## Stretch Goals:

* add esLint dependency
* functions/src/config/firebase.ts: Figure out how to use ES6 import statement rather than require for the Firebase Functions Admin SDK Private Key .json file
* functions/src/index.ts: add custom validation (e.g. checks whether an entry exists before trying to update it, check whether a users inputs are present and appropriate), authentication & authorization middleware for post route as mentioned at 37:55 and again at 59:05. The video author suggests [his article on Handling user authentication with Firebase](https://blog.logrocket.com/user-authentication-firebase-react-apps/) in your React apps even though this isn't a React app.
* functions/src/entryController.ts: Add more custom middleware validation for the APIs create route for calls that don't include all the required fields. Currently the API returns a 500 error but it should return a user input error. This should be caught with middleware before it is even sent to Firestore. This suggestion is made in the video at 40:15.
* functions/src/entryController.ts: Address error on line 32, 43, 74 & 98: Object is of type 'unknown'.ts(2571).
* add the Firebase console locally