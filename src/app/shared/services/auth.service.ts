import { Injectable } from '@angular/core'
import { AngularFireAuth } from 'angularfire2/auth'
import { auth } from 'firebase'

@Injectable({
    providedIn: 'root'
})

export class AuthService {
    constructor(private afAuth: AngularFireAuth) { }

    login() {
        return this.afAuth.auth.signInWithPopup(new auth.GoogleAuthProvider())        
    }

    logout() {
        return this.afAuth.auth.signOut()
    }
}