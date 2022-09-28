import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  searchTerm = '';
  profile = 'supplier';
  id = 1;
  title = 'urprovider-webapp';
  options = [
    { path: `/supplier-home/${this.id}`, title: 'Home'},
    { path: '', title: 'Plans'},
    { path: '', title: 'Notifications'},
    { path: `/supplier-inventory/${this.id}`, title: 'Inventory'},
    { path: '', title: 'Profile'}
  ]

  options2 = [
    { path: ``, title: 'Home'},
    { path: '', title: 'Orders'},
    { path: '', title: 'Notifications'},
    { path: '', title: 'Profile'}
  ]
}
