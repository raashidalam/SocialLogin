import { Component, OnInit } from '@angular/core';
import {LoginLibraryComponent, A} from 'projects/login-library/src/public_api';
import {FacebookComponent } from 'projects/login-library/src/public_api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'Login';
  constructor(){}
  ngOnInit() {
//A.getAuthServiceConfigs();
 

  }
}
