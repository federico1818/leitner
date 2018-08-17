import { Component, OnInit } from '@angular/core'
import { Observable } from 'rxjs'
import { CardService } from './../services/card.service'
import { Card } from './../models/card'

@Component({
    selector: 'app-card-list',
    templateUrl: './card-list.component.html',
    styleUrls: ['./card-list.component.scss']
})

export class CardListComponent implements OnInit {
    public cards: Observable<Card[]>
    
    constructor(private service: CardService) { }

    ngOnInit() {
        this.cards = this.service.all()
    }
}