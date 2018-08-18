import { Injectable } from '@angular/core'
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore'
import { Observable } from 'rxjs'
import { Card } from './../models/card'

@Injectable({
    providedIn: 'root'
})

export class CardService {
    private card: AngularFirestoreDocument<Card>
    private cardsCollection: AngularFirestoreCollection<Card>
    private cards: Observable<Card[]>
    private collection: string = 'cards'

    constructor(private afs: AngularFirestore) {
        this.cardsCollection = this.afs.collection<Card>(this.collection)
        this.cards = this.cardsCollection.valueChanges()
    }

    all() {
        return this.cards
    }

    save(card: Card) {
        let data = Object.assign({}, card)
        return this.cardsCollection.add(data)
    }

    findByBox(box: number) {
        return this.afs.collection<Card>(this.collection, ref => ref.where("box", "==", box)).valueChanges()
    }

    getById(id: string) {
        return this.afs.collection<Card>(this.collection).doc<Card>(id).valueChanges()
    }

    update(id: string, card: Card) {
        let data = Object.assign({}, card)
        this.card = this.afs.doc<Card>(`${this.collection}/${id}`)
        return this.card.update(data)
    }

}