import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-toolbar-view',
  templateUrl: './toolbar-view.component.html',
  styleUrls: ['./toolbar-view.component.css']
})
export class ToolbarViewComponent  {

  profile = 'supplier';
  id = 1;
  title = 'urprovider-webapp';
  options = [
    { path: `./supplier-home`, title: 'Home'},
    { path: `./supplier-plan`, title: 'Plans'},
    { path: '', title: 'Notifications'},
    { path: `./supplier-inventory`, title: 'Inventory'},
    { path: `./supplier-profile`, title: 'Profile'}
  ]
  /*Store*/
  options2 = [
    { path: `/store-home/${this.id}`, title: 'Home'},
    { path: '', title: 'Orders'},
    { path: '', title: 'Notifications'},
    { path: `/store-profile/${this.id}`, title: 'Profile'}
  ]
}
