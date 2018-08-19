import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

import { AuthRoutingModule } from './auth-routing.module'
import { SharedModule } from './../shared/shared.module'
import { LoginComponent } from './login/login.component'

@NgModule({
    imports: [
        CommonModule,
        AuthRoutingModule,
        SharedModule,
    ],
    declarations: [LoginComponent]
})

export class AuthModule { }