import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginComponent } from './components/components/login/login.component';
import { HeadersComponent } from './components/components/headers/headers.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HeadersComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
