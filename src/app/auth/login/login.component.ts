import { Component, OnInit } from '@angular/core'
import { AuthService } from './../../shared/services/auth.service'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit {

    constructor(private auth: AuthService) { }

    ngOnInit() {
    }

    login() {
        this.auth.login()
        .then(auth => {
            console.log(auth)
        }).catch(err => {
            console.error(err)
        })
    }

    logout() {
        this.auth.logout()
        .then(data => {
            console.log(data)
        }).catch(err => {
            console.error(err)
        })
    }

}