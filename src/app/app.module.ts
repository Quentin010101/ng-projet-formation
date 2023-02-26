import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { PagesModule } from './pages/pages.module';
import { PageNotFoundComponent } from './error/page-not-found/page-not-found.component';
import { DashboardModule } from './dashboard/dashboard.module';
import { AuthModule } from './auth/auth.module';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';
import { GlobalModule } from './global/global.module';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { UserService } from './service/user.service';
import { ProfileModule } from './dashboard/user/profile/profile.module';
import { Observable, tap } from 'rxjs';
import { environment } from 'src/environments/environments';
import { AuthService } from './service/auth.service';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';

function initializeAppFactory(httpClient: HttpClient, auth: AuthService): () => Observable<any> {
  let apiURL = environment.apiURL
  return () => httpClient.get(apiURL + "/user/show", {withCredentials: true})
    .pipe(
       tap(user => {
          if(user == null){
            auth.loggedIn.next(false)
          }else{
            auth.loggedIn.next(true)
          }
        })
    );
 }

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    GlobalModule,
    FormsModule,
    AuthModule,
    DashboardModule,
    PagesModule,
    AppRoutingModule,
    ProfileModule,
    MatIconModule,
    HttpClientModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatListModule,

  ],
  providers: [
    UserService,
    {
      provide: APP_INITIALIZER,
      useFactory: initializeAppFactory,
      deps: [HttpClient,AuthService],
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
