import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

import { MaterialModule } from './../material/material.module'

import { CardRoutingModule } from './card-routing.module'
import { CardComponent } from './pages/card/card.component'
import { CardCreateComponent } from './pages/card-create/card-create.component';
import { CardFormComponent } from './components/card-form/card-form.component'

@NgModule({
    declarations: [
        CardComponent, 
        CardCreateComponent, 
        CardFormComponent
    ],
    imports: [
        CommonModule,
        MaterialModule,
        CardRoutingModule
    ]
})

export class CardModule { }