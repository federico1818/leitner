import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'
import { AppComponent } from './app.component'

const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: "/new",
    },
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule { }