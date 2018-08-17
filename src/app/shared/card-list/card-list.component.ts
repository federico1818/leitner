import { Component, OnInit, Input } from '@angular/core'
import { Observable } from 'rxjs'
import { Card } from './../models/card'

@Component({
    selector: 'app-card-list',
    templateUrl: './card-list.component.html',
    styleUrls: ['./card-list.component.scss']
})

export class CardListComponent implements OnInit {
    @Input() cards: Observable<Card[]>
    
    constructor() { }

    ngOnInit() {
    }
}