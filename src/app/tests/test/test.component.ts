import { Component, OnInit } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import { CardService } from './../../shared/services/card.service'

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})

export class TestComponent implements OnInit {

    constructor(private route: ActivatedRoute, private service: CardService) { }

    ngOnInit() {
        let key = +this.route.snapshot.paramMap.get('key')
        console.log(key)
    }

}