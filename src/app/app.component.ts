import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'urprovider-webapp';
  options = [
    {path:'',title:'Home'},
    {path: '/searchlist',title: 'searchlist'}

  ]
}
