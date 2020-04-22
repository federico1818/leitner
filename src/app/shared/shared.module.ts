import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

import { MaterialModule } from './../material/material.module'

import { HeaderComponent } from './header/header.component';
import { MenuComponent } from './menu/menu.component'

@NgModule({
    declarations: [
        HeaderComponent,
        MenuComponent
    ],
    imports: [
        CommonModule,
        MaterialModule
    ],
    exports: [
        HeaderComponent,
    ]
})

export class SharedModule { }
