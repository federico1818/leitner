import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { CardComponent } from './card/card.component'
import { CardListComponent } from './card-list/card-list.component'
import { CardService } from './services/card.service'

@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [
        CardListComponent,
        CardComponent,
    ],
    exports: [
        CardComponent,
        CardListComponent,
    ],
    providers: [
        CardService,
    ],
})

export class SharedModule { }