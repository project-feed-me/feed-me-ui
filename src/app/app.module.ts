import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';

import { AppRoutingModule } from './app-routing.module';

import { loginComponent } from './login/login.component';
import { CookTypeComponent } from './cook-food-type/cook-type.component';


@NgModule({
  declarations: [
    AppComponent,
    CookTypeComponent,
    loginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
