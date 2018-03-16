import { Component } from '@angular/core';
import { Router } from '@angular/router';
Router
@Component({
  selector: 'cook-type-cmp',
  templateUrl: './cook-type.component.html',
})
export class CookTypeComponent {
  title = 'Cooking Type Page';
  constructor(private router: Router){
  }
  toDashboardPage(){
    this.router.navigateByUrl('recipe-dashboard');
  }
}
