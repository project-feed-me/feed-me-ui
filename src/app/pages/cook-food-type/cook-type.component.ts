import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CookFoodTypeService } from '../../services/cook-food-type-service';

@Component({
  selector: 'cook-type-cmp',
  templateUrl: './cook-type.component.html',
})
export class CookTypeComponent implements OnInit {
  title = 'Cooking Type Page';
  mockHttpData: any;
  constructor(
    private router: Router,
    private cookfoodservice: CookFoodTypeService
  ){
  }

  ngOnInit(){
    this.getCookFoodTypeCall();
  }

  getCookFoodTypeCall(){
    this.mockHttpData = this.cookfoodservice.getCookFoodType() ;  
  }

  toDashboardPage(){
    this.router.navigateByUrl('recipe-dashboard');
  }
}
