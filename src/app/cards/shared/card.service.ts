import { Injectable } from '@angular/core'
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore'
import { Observable } from 'rxjs'
import { Card } from './card'

@Injectable({
    providedIn: 'root'
})

export class CardService {
    private cardsCollection: AngularFirestoreCollection<Card>
    private cards: Observable<Card[]>

    constructor(private afs: AngularFirestore) {
        this.cardsCollection = this.afs.collection<Card>('cards')
        this.cards = this.cardsCollection.valueChanges()
    }

    all() {
        return this.cards
    }

    save(card: Card) {
        let data = Object.assign({}, card)
        return this.cardsCollection.add(data)
    }
}
