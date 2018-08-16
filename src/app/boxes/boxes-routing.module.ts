import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'
import { BoxListComponent } from './box-list/box-list.component'

const routes: Routes = [
    {
        path: 'boxes',
        component: BoxListComponent,
    }
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class BoxesRoutingModule { }