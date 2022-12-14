import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  profile = 'supplier';
  id = 1;
  title = 'urprovider-webapp';
  options = [
    { path: `/supplier-home/${this.id}`, title: 'Home'},
    { path: `/supplier-plan/${this.id}`, title: 'Plans'},
    { path: '', title: 'Notifications'},
    { path: `/supplier-inventory/${this.id}`, title: 'Inventory'},
    { path: `/supplier-profile/${this.id}`, title: 'Profile'}
  ]
  /*Store*/
  options2 = [
    { path: `/store-home/${this.id}`, title: 'Home'},
    { path: '', title: 'Orders'},
    { path: '', title: 'Notifications'},
    { path: `/store-profile/${this.id}`, title: 'Profile'}
  ]

  changeUser() {
    if(this.profile == 'supplier') this.profile = 'store';
    else this.profile = 'supplier';
  }
}
