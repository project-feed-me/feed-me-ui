import { Component, Input } from '@angular/core';

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
        <li *ngFor="let ingredient of recipe.ingredients" [innerHTML]="ingredient"></li>
      </ul>
    </div>  
    <span class="expand-collapse-body-description" [innerHTML]="recipe.description"></span>
    <div class="btn ">Add To List</div>
  </div>
</div>
  `,
})
export class ExpandCollapseComponent {
  @Input() recipe: any;
  @Input() index: string;
  expanded: boolean = false;
  toggleExpandCollapse() {
    this.expanded = this.expanded === false ? true : false;
  }
}
