import { NgModule } from "@angular/core";
import { RouterModule, Routes } from '@angular/router';
import { CookTypeComponent } from "../pages/cook-food-type/cook-type.component";
import { loginComponent } from "../pages/login/login.component";
import { RecipeDashboardComponent } from "../pages/recipe-dashboard/recipe-dashboard.component";


const routes: Routes = [
    {path: '', redirectTo: 'login', pathMatch:'full'},
    {path: 'login', component: CookTypeComponent },
    {path: 'cooking-type', component: CookTypeComponent},
    {path: 'recipe-dashboard', component: RecipeDashboardComponent}
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}
