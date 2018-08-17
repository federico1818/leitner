import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

import { BoxesRoutingModule } from './boxes-routing.module'
import { SharedModule } from './../shared/shared.module'
import { BoxComponent } from './box/box.component'
import { BoxListComponent } from './box-list/box-list.component'

@NgModule({
    imports: [
        CommonModule,
        BoxesRoutingModule,
        SharedModule,
    ],
    declarations: [
        BoxListComponent,
        BoxComponent,
    ]
})

export class BoxesModule { }