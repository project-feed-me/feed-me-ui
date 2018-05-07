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
import { HttpClientModule }    from '@angular/common/http';
 
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';
import { MessagesComponent } from './messages/messages.component';
import { MessageService } from './message.service';

@NgModule({
  declarations: [
    AppComponent,
    CookTypeComponent,
    loginComponent,
    NavigationBarComponent,
    MenuComponent,
    CartComponent,
    RecipeDashboardComponent,
    ExpandCollapseComponent,
    MessagesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    // The HttpClientInMemoryWebApiModule module intercepts HTTP requests
    // and returns simulated server responses.
    // Remove it when a real server is ready to receive requests.
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    )

  ],
  providers: [CookFoodTypeService, MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
