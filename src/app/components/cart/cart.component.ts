import { SelectedItems } from './../../mock-data';
import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'cart-component',
  templateUrl: './cart.component.html',
})
export class CartComponent implements OnInit {
  menuOpen:boolean = false;
  list: any;
  constructor() { }

  ngOnInit() {
  }

  toggleCart() {
    if(this.menuOpen === true){
      this.menuOpen = false
    } else {
      this.menuOpen = true;
    }
  }
  closeMenu() {
    this.menuOpen = false;
  }
  ngAfterContentChecked(){
    this.list = SelectedItems;
  }
  removeItem(){

  }
}
