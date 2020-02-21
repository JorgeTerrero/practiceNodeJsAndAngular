import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginComponent } from './view/login/login.component';
import { HeadersComponent } from './view/headers/headers.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HeadersComponent,
   
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
