import { Component, OnInit, ViewChild } from '@angular/core'
import { CardService } from './../shared/card.service'
import { Card } from './../shared/card'

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