import { Component, OnInit,Input } from '@angular/core';
import { LoginLibraryService } from '../login-library.service';

@Component({
  selector: 'lib-facebook',
  templateUrl: './facebook.component.html',
  styleUrls: ['./facebook.component.css']
})
export class FacebookComponent implements OnInit {

  constructor(public login: LoginLibraryService) {}
  name:string;
  signIn()
  {

    this.login.signInWithFacebook()
  }

  signout() {
   
   if(this.login.signout())
   {
     this.login.token=''
   }
   else{
     
   }
  }
  ngOnInit() {

 

  }

  Checklogin(){

    if(this.login.token === undefined || this.login.token === null||this.login.token===''){
     
      return false;
    }
    else {
     
      return true;
    }
  }

}
