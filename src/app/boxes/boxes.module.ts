import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

import { BoxesRoutingModule } from './boxes-routing.module';
import { BoxListComponent } from './box-list/box-list.component'

@NgModule({
    imports: [
        CommonModule,
        BoxesRoutingModule
    ],
    declarations: [BoxListComponent]
})

export class BoxesModule { }