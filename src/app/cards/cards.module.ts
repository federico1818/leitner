import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

import { CardsRoutingModule } from './cards-routing.module'
import { CardComponent } from './card/card.component'
import { CardService } from './shared/card.service'

@NgModule({
    declarations: [
        CardComponent
    ],
    imports: [
        CommonModule,
        CardsRoutingModule
    ],
    providers: [
        CardService
    ],
})
export class CardsModule { }
