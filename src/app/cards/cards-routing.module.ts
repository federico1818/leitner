import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'
import { CardCreateComponent } from './card-create/card-create.component'
import { CardListComponent } from './card-list/card-list.component'

const routes: Routes = [
    {
        path: 'cards',
        children: [
            {
                path: '',
                component: CardListComponent,
            },
            {
                path: 'create',
                component: CardCreateComponent,
            },
        ]
    },
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class CardsRoutingModule { }