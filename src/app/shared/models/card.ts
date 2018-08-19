export class Card {
    public question: string
    public answer: string
    public box: number
    public date: Date

    constructor() {
        this.box = 1
        this.date = new Date()
    }
}