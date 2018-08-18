import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'

import { AngularFireModule } from 'angularfire2'
import { AngularFirestoreModule } from 'angularfire2/firestore'
import { environment } from '../environments/environment'

import { AppRoutingModule } from './app-routing.module'

import { SharedModule } from './shared/shared.module'
import { CardsModule } from './cards/cards.module'
import { BoxesModule } from './boxes/boxes.module'
import { TestsModule } from './tests/tests.module'

import { AppComponent } from './app.component'
import { MenuComponent } from './menu/menu.component'

@NgModule({
    declarations: [
        AppComponent,
        MenuComponent
    ],
    imports: [
        BrowserModule,
        SharedModule,
        BoxesModule,
        CardsModule,
        TestsModule,
        AppRoutingModule,
        AngularFireModule.initializeApp(environment.firebase),
        AngularFirestoreModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})

export class AppModule { }