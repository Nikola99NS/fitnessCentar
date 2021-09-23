import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
// import { FontAwesomeModule } from '@fortawesome/angular-fontawesome'
import { FormsModule } from '@angular/forms';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http'
import { UserService } from './user.service';
import { ProbaComponent } from './proba/proba.component';
import { RegisterComponent } from './reg/register/register.component';
import { LoginComponent } from './login/login/login.component';
import { AuthGuard } from './guard/auth.guard';
import { TokenInterceptor } from './services/token-interceptor';
import { TreneriListComponent } from './treneri/treneri-list/treneri-list.component';
import { TrenerComponent } from './treneri/trener/trener.component';
import { CenovnikComponent } from './cenovnik/cenovnik/cenovnik.component';
import { ShopComponent } from './shop/shop.component';
import { GrupniTreningComponent } from './grupni-trening/grupni-trening.component';
import { LogoutComponent } from './logout/logout.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
// import { TreneriListComponent } from './treneri/treneri-list/treneri-list/treneri-list.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    ProbaComponent,
    RegisterComponent,
    LoginComponent,
    TreneriListComponent,
    TrenerComponent,
    CenovnikComponent,
    ShopComponent,
    GrupniTreningComponent,
    LogoutComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    Ng2SearchPipeModule 
  ],
  
  providers: [TreneriListComponent, AuthGuard, { provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true }],

  bootstrap: [AppComponent]
})
export class AppModule { }
