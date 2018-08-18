import { Component, OnInit } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import { Observable } from 'rxjs'
import { CardService } from './../../shared/services/card.service'
import { Card } from './../../shared/models/card'

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})

export class TestComponent implements OnInit {
    public card: Observable<Card>

    constructor(private route: ActivatedRoute, private service: CardService) { }

    ngOnInit() {
        let key = this.route.snapshot.paramMap.get('key')
        this.card = this.service.getById(key)
    }

}