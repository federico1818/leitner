import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { FormsModule } from '@angular/forms'

import { CardsRoutingModule } from './cards-routing.module'
import { CardComponent } from './card/card.component'
import { CardService } from './shared/card.service'
import { CardFormComponent } from './card-form/card-form.component'

@NgModule({
    declarations: [
        CardComponent,
        CardFormComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        CardsRoutingModule
    ],
    providers: [
        CardService
    ],
})
export class CardsModule { }
