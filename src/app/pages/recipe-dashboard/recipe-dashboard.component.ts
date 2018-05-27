import { PrimaryIngrdients } from './../../placeholderModels/primary-ingredients';
import { simplyFedServices } from '../../services/simply-fed-services';
import { Component, OnInit } from '@angular/core';
import { IRecipeItem } from '../../interfaces/irecipe';
import { CookFoodTypeService } from '../../services/cook-food-type-service';

@Component({
  selector: 'app-recipe-dashboard',
  templateUrl: './recipe-dashboard.component.html',
})
export class RecipeDashboardComponent implements OnInit {
  private alphabetDivider: any;
  private alphabetDividerBool: boolean = true;
  private PrimaryIngrdients = {};
  private counter: 0;
  private i: number;
  private mockRecipeData: Array<IRecipeItem> = [
    {
      name: "Apple Chicken",
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
      ingredients: ["2 tbs Taco seasoning", "4 chicken breast", "8 oz chicken stock", "1 tsp salt", "1 tsp pepper", "1 tsp chili powder"],
      isSlicer: false
    },
    {
      name: "APRICOT CHICKEN",
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
      ingredients: ["1 tbs Taco seasoning", "2 chicken breast", "4 oz chicken stock", "4 tsp salt", "7 tsp pepper", "10 tsp chili powder"],
      isSlicer: false
    },    
    {
      name: "Azzzz Chicken",
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
      ingredients: ["6 tbs Taco seasoning", "20 chicken breast", "10 oz chicken stock", "12 tsp salt", "14 tsp pepper", "15 tsp chili powder"]
    },
    {
      name: "Brass Chicken",
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
      ingredients: ["6 tbs Taco seasoning", "20 chicken breast", "10 oz chicken stock", "12 tsp salt", "14 tsp pepper", "15 tsp chili powder"],
      isSlicer: false
    },
    {
      name: "Bowl Chicken",
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
      ingredients: ["6 tbs Taco seasoning", "20 chicken breast", "10 oz chicken stock", "12 tsp salt", "14 tsp pepper", "15 tsp chili powder"],
      isSlicer: false
    },
    {
      name: "Crazy Chicken",
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
      ingredients: ["6 tbs Taco seasoning", "20 chicken breast", "10 oz chicken stock", "12 tsp salt", "14 tsp pepper", "15 tsp chili powder"],
      isSlicer: false
    },
    {
      name: "Crunchy Chicken",
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
      ingredients: ["6 tbs Taco seasoning", "20 chicken breast", "10 oz chicken stock", "12 tsp salt", "14 tsp pepper", "15 tsp chili powder"],
      isSlicer: false
    },
    {
      name: "Crunchy Chiicken",
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
      ingredients: ["6 tbs Taco seasoning", "20 chicken breast", "10 oz chicken stock", "12 tsp salt", "14 tsp pepper", "15 tsp chili powder"],
      isSlicer: false
    },
    {
      name: "Crunchy Chiiiiiicken",
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
      ingredients: ["6 tbs Taco seasoning", "20 chicken breast", "10 oz chicken stock", "12 tsp salt", "14 tsp pepper", "15 tsp chili powder"],
      isSlicer: false
    },
    {
      name: "Dank Chicken",
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
      ingredients: ["6 tbs Taco seasoning", "20 chicken breast", "10 oz chicken stock", "12 tsp salt", "14 tsp pepper", "15 tsp chili powder"],
      isSlicer: false
    },
    {
      name: "Dannk Chiicken",
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
      ingredients: ["6 tbs Taco seasoning", "20 chicken breast", "10 oz chicken stock", "12 tsp salt", "14 tsp pepper", "15 tsp chili powder"],
      isSlicer: false
    },
    {
      name: "Drunk Chiiiiiicken",
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
      ingredients: ["6 tbs Taco seasoning", "20 chicken breast", "10 oz chicken stock", "12 tsp salt", "14 tsp pepper", "15 tsp chili powder"],
      isSlicer: false
    },
    {
      name: "Errk Chicken",
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
      ingredients: ["6 tbs Taco seasoning", "20 chicken breast", "10 oz chicken stock", "12 tsp salt", "14 tsp pepper", "15 tsp chili powder"],
      isSlicer: false
    },
    {
      name: "Eqqqk Chiicken",
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
      ingredients: ["6 tbs Taco seasoning", "20 chicken breast", "10 oz chicken stock", "12 tsp salt", "14 tsp pepper", "15 tsp chili powder"],
      isSlicer: false
    },
    {
      name: "Ezzzzk Chiiiiiicken",
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
      ingredients: ["6 tbs Taco seasoning", "20 chicken breast", "10 oz chicken stock", "12 tsp salt", "14 tsp pepper", "15 tsp chili powder"],
      isSlicer: false
    },
  ]
  private alphabetDividerArray: any = [
    {letter: "A"},
    {letter: "B"},
    {letter: "C"},
    {letter: "D"},
    {letter: "E"},
    {letter: "F"},
    {letter: "G"},
    {letter: "H"},
    {letter: "I"},
    {letter: "J"},
    {letter: "K"},
    {letter: "K"},
    {letter: "L"},
    {letter: "M"},
    {letter: "N"},
    {letter: "O"},
    {letter: "P"},
    {letter: "Q"},
    {letter: "R"},
    {letter: "S"},
    {letter: "T"},
    {letter: "U"},
    {letter: "V"},
    {letter: "W"},
    {letter: "X"},
    {letter: "Y"},
    {letter: "Z"}
  ];
  constructor(    private cookfoodservice: CookFoodTypeService, private simplyFedService: simplyFedServices) { }

  ngOnInit() {
    let index: number = 0
    this.mockRecipeData.forEach(obj => {
    obj.name.charAt(0).toString()
      if(obj.name.charAt(0).toString() === this.alphabetDividerArray[index].letter.toString()){
        obj.isSlicer = true;
        this.alphabetDivider = this.alphabetDividerArray[index].letter.toString()
        index ++;
      }
    })
    this.PrimaryIngrdients = this.simplyFedService.getPrimaryIngredients();
    console.log(this.PrimaryIngrdients)

  }

}
