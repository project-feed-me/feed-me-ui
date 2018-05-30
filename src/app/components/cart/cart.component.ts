import { SelectedItems } from './../../mock-data';
import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
@Component({
  selector: 'cart-component',
  templateUrl: './cart.component.html',
})
export class CartComponent implements OnInit {
  menuOpen:boolean = false;
  list: any;
  private downloadJsonHref: any;
  constructor(private sanitizer: DomSanitizer) { }

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
  removeItem(itemId: string){
    for (var i = SelectedItems.length; i--;) {
      if (SelectedItems[i].id === itemId) {
        SelectedItems.splice(i, 1);
      }
      console.log(SelectedItems)
    }
  }
  generateDownloadJsonUri() {
    var theJSON = JSON.stringify(this.list);
    // var uri = this.sanitizer.bypassSecurityTrustUrl("data:text/json;charset=UTF-8," + encodeURIComponent(theJSON));
    this.downloadJsonHref = theJSON;
  }
}
