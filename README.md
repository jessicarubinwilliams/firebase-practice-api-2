This project was created primarily by following the very helpful YouTube tutorial [Build a Serverless API with Firebase cloud functions, TypeScript and Firestore](https://youtu.be/T8SZv6h2WbY). There is also a related [written tutorial](https://blog.logrocket.com/rest-api-firebase-cloud-functions-typescript-firestore/) and [GitHub repo](https://github.com/ebenezerdon/journal-rest-api).


## Stretch Goals:

* add esLint dependency
* functions/src/config/firebase.ts: Figure out how to use ES6 import statement rather than require for the Firebase Functions Admin SDK Private Key .json file
* functions/src/index.ts: add custom validation (e.g. checks whether an entry exists before trying to update it, check whether a users inputs are present and appropriate), authentication & authorization middleware for post route as mentioned at 37:55 and again at 59:05. The video author suggests [his article on Handling user authentication with Firebase](https://blog.logrocket.com/user-authentication-firebase-react-apps/) in your React apps even though this isn't a React app.

for example, middleware that checks whether an entry exists before trying to update it. We could also have an authentication and authorization middleware (here’s a good way to handle authentication with Firebase React apps) just before the controller functions. 

* functions/src/entryController.ts: Address error on line 32, 43, 74 & 98: Object is of type 'unknown'.ts(2571).
* functions/src/entryController.ts: Add more custom middleware validation for the APIs create route for calls that don't include all the required fields. Currently the API returns a 500 error but it should return a user input error. This should be caught with middleware before it is even sent to Firestore. This suggestion is made in the video at 40:15.
* package.json: determine if firebase-admin dependency in the root directory's package.json is actually needed since the express app lives withing the functions subdirectory.
* add the Firebase console locally