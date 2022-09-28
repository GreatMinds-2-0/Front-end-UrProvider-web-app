import { Component } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'urprovider-webapp';

  options = [
    {path:'/home',title:'Home'},
  ]
  constructor(private route: ActivatedRoute,
              private router: Router) { }
  navigateToHome() {
    this.router.navigate(['home']);
  }
}
