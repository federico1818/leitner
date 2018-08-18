import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'
import { TestComponent } from './test/test.component'

const routes: Routes = [
    {
        path: 'tests',
        children: [
            {
                path: ':key',
                component: TestComponent
            },
        ]
    }
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class TestsRoutingModule { }