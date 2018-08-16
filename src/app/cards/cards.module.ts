import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { FormsModule } from '@angular/forms'

import { CardsRoutingModule } from './cards-routing.module'
import { CardComponent } from './card/card.component'
import { CardService } from './shared/card.service'
import { CardFormComponent } from './card-form/card-form.component';
import { CardListComponent } from './card-list/card-list.component';
import { CardCreateComponent } from './card-create/card-create.component'

@NgModule({
    declarations: [
        CardComponent,
        CardFormComponent,
        CardListComponent,
        CardCreateComponent
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
