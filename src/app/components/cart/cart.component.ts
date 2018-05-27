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
    console.log(this.list)
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
    console.log(this.list)
  }
  removeItem(){

  }
}
