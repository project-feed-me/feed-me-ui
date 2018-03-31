import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';

import { ExpandCollapseComponent } from './components/expand-collapse.compnent';
import { CookFoodTypeService } from './services/cook-food-type-service';
import { RecipeDashboardComponent } from './pages/recipe-dashboard/recipe-dashboard.component';
import { CartComponent } from './components/cart/cart.component';
import { MenuComponent } from './components/menu/menu.component';
import { NavigationBarComponent } from './components/navigation-bar/navigation-bar.component';
import { loginComponent } from './pages/login/login.component';
import { CookTypeComponent } from './pages/cook-food-type/cook-type.component';
import { AppRoutingModule } from './routing/app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    CookTypeComponent,
    loginComponent,
    NavigationBarComponent,
    MenuComponent,
    CartComponent,
    RecipeDashboardComponent,
    ExpandCollapseComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [CookFoodTypeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
