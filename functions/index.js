/*const functions = require('firebase-functions');
const admin = require('firebase-admin');

admin.initializeApp(functions.config().firebase);

exports.onCardCreate = functions.firestore
                        .document('cards/{cardId}')
                        .onCreate((snap, context) => {
                            const card = snap.data()
                            const payload = {
                                notification: {
                                    title: 'DBZ',
                                    body: card,
                                }
                            }
                            admin.messaging().sendToDevice(payload)
                        })*/

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });
