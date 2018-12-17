import { Component, OnInit } from '@angular/core';
import { LoginLibraryService } from '../login-library.service';

@Component({
  selector: 'app-Google',
  templateUrl: './Google.component.html',
  styleUrls: ['./Google.component.css']
})
export class GoogleComponent implements OnInit {

  constructor(public login: LoginLibraryService) {}
  signIn()
  {

    this.login.signInWithGoogle()
  }

  signout() {
   
   if(this.login.signout())
   {
     this.login.email=''
   }
   else{
     
   }
  }
  ngOnInit() {

 

  }

  Checklogin(){

    if(this.login.email === undefined || this.login.email === null||this.login.email===''){
     
      return false;
    }
    else {
     
      return true;
    }
  }

}
