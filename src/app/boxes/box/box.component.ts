import { Component, OnInit } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import { Observable } from 'rxjs'
import { switchMap } from 'rxjs/operators'
import { CardService } from './../../shared/services/card.service'
import { Card } from './../../shared/models/card'

@Component({
    selector: 'app-box',
    templateUrl: './box.component.html',
    styleUrls: ['./box.component.scss']
})

export class BoxComponent implements OnInit {
    public cards: Observable<Card[]>
    
    constructor(private route: ActivatedRoute, private service: CardService) { }

    ngOnInit() {
        let number = +this.route.snapshot.paramMap.get('number')
        this.cards = this.service.all()
    }
}