import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { FormsModule } from '@angular/forms'

import { CardsRoutingModule } from './cards-routing.module'
import { CardFormComponent } from './card-form/card-form.component';
import { CardCreateComponent } from './card-create/card-create.component'

@NgModule({
    declarations: [
        CardFormComponent,
        CardCreateComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        CardsRoutingModule
    ],
})

export class CardsModule { }