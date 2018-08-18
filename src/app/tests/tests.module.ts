import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

import { TestsRoutingModule } from './tests-routing.module';
import { TestComponent } from './test/test.component'

@NgModule({
    imports: [
        CommonModule,
        TestsRoutingModule
    ],
    declarations: [TestComponent]
})

export class TestsModule { }