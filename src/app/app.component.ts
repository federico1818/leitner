import { Component, OnInit } from '@angular/core'
import { MessagingService } from './shared/services/messaging.service'

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {
    constructor(private service: MessagingService) {}

    ngOnInit() {
        this.service.requestPermission()
        this.service.receiveMessage()
    }
}