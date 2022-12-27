import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { LoginComponent } from "./auth/login/login.component";
import { SignInComponent } from "./auth/sign-in/sign-in.component";
import { PageNotFoundComponent } from "./error/page-not-found/page-not-found.component";


const appRoutes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'login', component: LoginComponent},
  {path: 'signin', component: SignInComponent},
  {path: '**', component: PageNotFoundComponent},
]

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports:[
    RouterModule
  ]
})

export class AppRoutingModule{

}
