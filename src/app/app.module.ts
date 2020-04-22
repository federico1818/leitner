import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

import { MaterialModule } from './material/material.module'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { SharedModule } from './shared/shared.module'
import { HomeModule } from './home/home.module'
import { CardModule } from './card/card.module'

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        MaterialModule,
        AppRoutingModule,
        SharedModule,
        HomeModule,
        CardModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})

export class AppModule { }
