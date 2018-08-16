import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'
import { BoxComponent } from './box/box.component'
import { BoxListComponent } from './box-list/box-list.component'

const routes: Routes = [
    {
        path: 'boxes',
        children: [
            {
                path: '',
                component: BoxListComponent
            },
            {
                path: ':number',
                component: BoxComponent
            },
        ]
    }
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class BoxesRoutingModule { }