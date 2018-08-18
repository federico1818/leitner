import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

import { TestsRoutingModule } from './tests-routing.module'
import { SharedModule } from './../shared/shared.module'
import { TestComponent } from './test/test.component'

@NgModule({
    imports: [
        CommonModule,
        TestsRoutingModule,
        SharedModule,
    ],
    declarations: [TestComponent]
})

export class TestsModule { }