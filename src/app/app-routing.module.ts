import { NgModule } from "@angular/core";
import { RouterModule, Routes } from '@angular/router';

import { CookTypeComponent } from './cook-food-type/cook-type.component';
import { loginComponent } from './login/login.component';

const routes: Routes = [
    {path: '', redirectTo: 'login', pathMatch:'full'},
    {path: 'login', component: CookTypeComponent },
    {path: 'cooking-type', component: CookTypeComponent}
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}
