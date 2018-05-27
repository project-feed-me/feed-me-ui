import { SelectedItems } from './../mock-data';
import { Component, Input, Output, EventEmitter } from '@angular/core';
@Component({
  selector: 'expand-collapse-component',
  template: `
<div class="expand-collapse-wrapper container">
  <div class="expand-collapse-header-container clearfix">
    <div class="expand-collapse-name" [innerHTML]="recipe.name"></div>
    <div class="expand-collapse-arrow" [class.transform-expand-icon]="expanded">
      <span class="fas fa-angle-down" (click)="toggleExpandCollapse()"></span>
    </div>
  </div>
  <div class="expand-collapse-body-container" [class.expanded]="expanded">
    <div class="expand-collapse-body-ingredients clearfix">
      <div class="name-placeholder">Ingredients:</div>
      <div class="details-amount-selector-container">
      </div>
      <ul>
        <li *ngFor="let ingredients of recipe.ingredients">
            <span>{{ingredients.ingredient.name}}
            </span>
        </li>
      </ul>
    </div>  
    <span class="expand-collapse-body-description" [innerHTML]="recipe.description"></span>
    <div class="btn" (click)="outputClickedItem(this.recipe)">Add To Cart</div>
  </div>
</div>
  `,
})
export class ExpandCollapseComponent {
  @Input() recipe: any;
  @Input() index: string;
  @Output() clickedItem = new EventEmitter<any>();
  
  constructor() { }

  expanded: boolean = false;
  toggleExpandCollapse() {
    this.expanded = this.expanded === false ? true : false;
  }

  outputClickedItem(item: any){
    SelectedItems.push(item)
    console.log(SelectedItems)
    this.clickedItem.emit()
  }
}
