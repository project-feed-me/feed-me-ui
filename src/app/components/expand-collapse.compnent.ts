import { Component, Input } from '@angular/core';

@Component({
  selector: 'expand-collapse-component',
  template: `
<div class="sf-expand-collapse-wrapper container">
  <div class="sf-expand-collapse-header-container clearfix">
    <div class="sf-expand-collapse-name" [innerHTML]="recipe.name"></div>
    <div class="sf-expand-collapse-arrow" [class.transform-expand-icon]="expanded">
      <span class="fas fa-angle-down" (click)="toggleExpandCollapse()"></span>
    </div>
  </div>
  <div class="sf-expand-collapse-body-container" [class.expanded]="expanded">
    <div class="sf-expand-collapse-body-ingredients clearfix">
      <div class="name-placeholder">Ingredients:</div>
      <ul>
        <li *ngFor="let ingredient of recipe.ingredients" [innerHTML]="ingredient"></li>
      </ul>
    </div>  
    <span class="sf-expand-collapse-body-description" [innerHTML]="recipe.description"></span>
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
