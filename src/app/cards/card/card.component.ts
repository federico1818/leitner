import { Component, OnInit } from '@angular/core'
import { CardService } from './../shared/card.service'

@Component({
    selector: 'app-card',
    templateUrl: './card.component.html',
    styleUrls: ['./card.component.scss']
})

export class CardComponent implements OnInit {
    
    constructor(private service: CardService) { }

    ngOnInit() {
        
    }

}