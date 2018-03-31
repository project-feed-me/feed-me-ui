import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recipe-dashboard',
  templateUrl: './recipe-dashboard.component.html',
})
export class RecipeDashboardComponent implements OnInit {
  mockRecipeData: any = [
    {
      name: "Apple Chicken",
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
      ingredients: ["2 tbs Taco seasoning", "4 chicken breast", "8 oz chicken stock", "1 tsp salt", "1 tsp pepper", "1 tsp chili powder"]
    },
    {
      name: "APRICOT CHICKEN",
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
      ingredients: ["1 tbs Taco seasoning", "2 chicken breast", "4 oz chicken stock", "4 tsp salt", "7 tsp pepper", "10 tsp chili powder"]
    },    {
      name: "Azzzz Chicken",
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
      ingredients: ["6 tbs Taco seasoning", "20 chicken breast", "10 oz chicken stock", "12 tsp salt", "14 tsp pepper", "15 tsp chili powder"]
    }
  ]
  constructor() { }

  ngOnInit() {
  }

}
