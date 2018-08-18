import { Component, OnInit } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import { Observable } from 'rxjs'
import { CardService } from './../../shared/services/card.service'
import { Card } from './../../shared/models/card'
import { Test } from './../models/test'

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})

export class TestComponent implements OnInit {
    public key: string
    public card: Card
    public test: Test

    constructor(private route: ActivatedRoute, private service: CardService) { }

    ngOnInit() {
        this.key = this.route.snapshot.paramMap.get('key')
        this.service.getById(this.key).subscribe(data => {
            this.card = data as Card
            this.test = new Test(this.card)
        })
    }

    correct() {
        this.test.correct()
        this.update()
        this.redirect()
    }

    incorrect() {
        this.test.incorrect()
        this.update()
        this.redirect()
    }

    private update() {
        this.service.update(this.key, this.card)
    }

    private redirect() {
        console.log('Redirect')
    }

}