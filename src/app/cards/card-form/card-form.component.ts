import { Component, OnInit, ViewChild } from '@angular/core'
import { Card } from './../../shared/models/card'
import { CardService } from './../../shared/services/card.service'

@Component({
    selector: 'app-card-form',
    templateUrl: './card-form.component.html',
    styleUrls: ['./card-form.component.scss']
})

export class CardFormComponent implements OnInit {
    @ViewChild('form') form
    
    public data: Card = new Card
    public submitted:boolean = false
    
    constructor(private service: CardService) { }

    ngOnInit() {
    }

    onSubmit(){
        this.submitted = true
        this.service.save(this.data)
        .then(ref => {
            this.form.reset()
        })
    }
}