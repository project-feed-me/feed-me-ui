import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'menu-component',
  templateUrl: './menu.component.html',
})
export class MenuComponent implements OnInit {
  menuOpen:boolean = false;

  constructor() { }

  ngOnInit() {
  }

  toggleMenu() {
    if(this.menuOpen === true){
      this.menuOpen = false
    } else {
      this.menuOpen = true;
    }
    console.log(this.menuOpen)
  }
  closeMenu() {
    this.menuOpen = false;
  }
}
