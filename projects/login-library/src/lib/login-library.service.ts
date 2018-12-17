import { Injectable } from '@angular/core';
import {
  AuthService,
  GoogleLoginProvider,
  FacebookLoginProvider,
 
  } from 'angular-6-social-login';

@Injectable({
  providedIn: 'root'
})

export class LoginLibraryService {
 
  constructor(private socialAuthService: AuthService) { }
token:string='';
email:string='';
  signInWithFacebook():void {
    this.socialAuthService.signIn(FacebookLoginProvider.PROVIDER_ID).then(
          (userData) => {
           this.token= userData.token;
            console.log(""+" sign in data : " , this.token);
           
          }
        );
  }
  signInWithGoogle():void {
    this.socialAuthService.signIn(GoogleLoginProvider.PROVIDER_ID).then(
          (userData) => {
           this.email= userData.email;
           console.log(""+" sign in data : " , this.email);
          
          }
        );
  }
 
  signout():boolean {
    // console.log(token);
    try{this.socialAuthService.signOut();
      return true;
    }
    catch{
      return false;

    }

  }
}
