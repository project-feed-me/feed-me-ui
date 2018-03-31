import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'navigation-bar',
  templateUrl: './navigation-bar.component.html',
})
export class NavigationBarComponent {

constructor(private router:Router){}

returnToCookingType(){
  this.router.navigateByUrl("cooking-type");
}

}
