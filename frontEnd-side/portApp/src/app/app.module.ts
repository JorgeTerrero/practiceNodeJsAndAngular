import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import{HttpClientModule} from '@angular/common/http'
import { AppComponent } from './app.component';
import { LoginComponent } from './view/login/login.component';
import { HeadersComponent } from './view/headers/headers.component';
import {RegisterUsersComponent} from './view/register-users/register-users.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HeadersComponent,
   RegisterUsersComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
