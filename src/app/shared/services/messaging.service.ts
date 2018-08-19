import { Injectable, Inject } from '@angular/core'
import { FirebaseApp } from 'angularfire2'
import * as firebase from 'firebase'

@Injectable({
    providedIn: 'root'
})

export class MessagingService {
    public messaging
    
    constructor(@Inject(FirebaseApp) private app: firebase.app.App) {
        this.messaging = firebase.messaging(this.app)
    }

    requestPermission() {
        this.messaging.requestPermission()
        .then(() => {
            console.log('Permission granted')
            return this.messaging.getToken()
        }).then(token => {
            console.log(token)
        }).catch(err => {
            console.error(err)
        })
    }

    receiveMessage() {
        this.messaging.onMessage(payload => {
            console.log(payload)
        })
    }
}