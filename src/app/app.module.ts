import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'

import { AngularFireModule } from 'angularfire2'
import { AngularFireAuthModule } from 'angularfire2/auth'
import { AngularFirestoreModule } from 'angularfire2/firestore'
import { environment } from '../environments/environment'

import { AppRoutingModule } from './app-routing.module'

import { SharedModule } from './shared/shared.module'
import { AuthModule } from './auth/auth.module'
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
        AuthModule,
        CardsModule,
        TestsModule,
        AppRoutingModule,
        AngularFireModule.initializeApp(environment.firebase),
        AngularFirestoreModule,
        AngularFireAuthModule,
    ],
    providers: [],
    bootstrap: [AppComponent]
})

export class AppModule { }