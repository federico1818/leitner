importScripts('https://www.gstatic.com/firebasejs/4.12.1/firebase-app.js')
importScripts('https://www.gstatic.com/firebasejs/4.12.1/firebase-messaging.js')

firebase.initializeApp({
    apiKey: "AIzaSyCp1O0IsfsrlKPchHhImN4_ZrDk-L9oVjg",
    authDomain: "leitner-e9d1f.firebaseapp.com",
    databaseURL: "https://leitner-e9d1f.firebaseio.com",
    projectId: "leitner-e9d1f",
    storageBucket: "leitner-e9d1f.appspot.com",
    messagingSenderId: "1086764840554"
});

const messaging = firebase.messaging();