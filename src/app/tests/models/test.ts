import { Card } from './../../shared/models/card'
import { boxMax } from './../shared/box-max'

export class Test {
    constructor(private card: Card) {}

    incorrect() {
        this.card.box = 1
    }

    correct() {
        if(this.card.box < boxMax)
            this.card.box++
    }
}