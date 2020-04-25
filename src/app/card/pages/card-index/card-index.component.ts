import { Component, OnInit } from '@angular/core'
import { AngularFirestore } from '@angular/fire/firestore'
import { Observable } from 'rxjs'

@Component({
    selector: 'app-card-index',
    templateUrl: './card-index.component.html',
    styleUrls: ['./card-index.component.scss']
})

export class CardIndexComponent implements OnInit {
    public cards: Observable<any[]>;

    constructor(
        private firestore: AngularFirestore
    ) {}

    ngOnInit(): void {
        this.cards = this.firestore.collection('cards').valueChanges()
    }

}
