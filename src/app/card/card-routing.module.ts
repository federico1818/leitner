import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'

import { CardComponent } from './pages/card/card.component'
import { CardCreateComponent } from './pages/card-create/card-create.component'

const routes: Routes = [
    {
        path: 'cards',
        component: CardComponent
    },
    {
        path: 'cards/create',
        component: CardCreateComponent
    }
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class CardRoutingModule { }
