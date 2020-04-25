import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'

import { CardComponent } from './pages/card/card.component'
import { CardIndexComponent } from './pages/card-index/card-index.component'
import { CardCreateComponent } from './pages/card-create/card-create.component'

const routes: Routes = [
    {
        path: 'cards',
        component: CardComponent
    },
    {
        path: 'cards/create',
        component: CardCreateComponent
    },
    {
        path: 'cards/index',
        component: CardIndexComponent
    }
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class CardRoutingModule { }
