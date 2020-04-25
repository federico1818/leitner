import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

import { AngularFirestoreModule } from '@angular/fire/firestore'
import { MaterialModule } from './../material/material.module'

import { CardRoutingModule } from './card-routing.module'
import { CardComponent } from './pages/card/card.component'
import { CardCreateComponent } from './pages/card-create/card-create.component'
import { CardFormComponent } from './components/card-form/card-form.component'
import { CardIndexComponent } from './pages/card-index/card-index.component'

@NgModule({
    declarations: [
        CardComponent, 
        CardCreateComponent, 
        CardFormComponent, 
        CardIndexComponent
    ],
    imports: [
        CommonModule,
        AngularFirestoreModule,
        MaterialModule,
        CardRoutingModule
    ]
})

export class CardModule { }