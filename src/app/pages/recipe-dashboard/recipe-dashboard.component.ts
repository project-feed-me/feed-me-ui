import { PrimaryIngrdients } from './../../placeholderModels/primary-ingredients';
import { simplyFedServices } from '../../services/simply-fed-services';
import { Component, OnInit } from '@angular/core';
import { IRecipeItem } from '../../interfaces/irecipe';
import { CookFoodTypeService } from '../../services/cook-food-type-service';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-recipe-dashboard',
  templateUrl: './recipe-dashboard.component.html',
})
export class RecipeDashboardComponent implements OnInit {
  private alphabetDivider: any;
  private alphabetDividerBool: boolean = true;
  private PrimaryIngredients;
  private ReturnedRecipes;
  private cookingMethodId: string;
  private counter: 0;
  private i: number;
  private moveCarousel: number = 0;
  private index = 0;

  private alphabetDividerArray: any = [];
  constructor(     private route: ActivatedRoute,
    private router: Router,  private cookfoodservice: CookFoodTypeService, private simplyFedService: simplyFedServices) { }

  ngOnInit() {
    let index: number = 0
    // this.mockRecipeData.forEach(obj => {
    // obj.name.charAt(0).toString()
    //   if(obj.name.charAt(0).toString() === this.alphabetDividerArray[index].letter.toString()){
    //     obj.isSlicer = true;
    //     this.alphabetDivider = this.alphabetDividerArray[index].letter.toString()
    //     index ++;
    //   }
    // })
    this.simplyFedService.getPrimaryIngredients().subscribe(returnedPrimaryIngrdients => {
      this.PrimaryIngredients = returnedPrimaryIngrdients
    });
    this.route.url.subscribe((params: Params) => {
      this.cookingMethodId = params[1].path
      console.log(this.cookingMethodId)
    });
  }

  scrollCarousel(direction: string){
    console.log(direction)
    if(direction.toString() === 'right'){
      let scrollBy = 33.3333
      this.index--
      this.moveCarousel = this.index * scrollBy;
    } else {
      let scrollBy = 33.3333
      this.index++
      this.moveCarousel = this.index * scrollBy;
    }
  }
  grabPrimaryIngredient(id: string){
    this.simplyFedService.getPrimaryIngredient(id, this.cookingMethodId).subscribe(returnedIngrdients => {
      this.ReturnedRecipes = returnedIngrdients;
      console.log(this.ReturnedRecipes.content)
      let char;
      let index = 0;
      let array = [];
      let unique_array = []
    })
  }
}
