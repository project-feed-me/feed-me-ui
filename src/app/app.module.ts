import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';

import { AppRoutingModule } from './app-routing.module';

import { loginComponent } from './login/login.component';
import { CookTypeComponent } from './cook-food-type/cook-type.component';
import { NavigationBarComponent } from './navigation-bar/navigation-bar.component';
import { MenuComponent } from './menu/menu.component';
import { CartComponent } from './cart/cart.component';
import { RecipeDashboardComponent } from './recipe-dashboard/recipe-dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    CookTypeComponent,
    loginComponent,
    NavigationBarComponent,
    MenuComponent,
    CartComponent,
    RecipeDashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
