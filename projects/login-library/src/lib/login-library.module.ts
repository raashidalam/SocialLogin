import { NgModule, ModuleWithProviders, Inject } from '@angular/core';
import { LoginLibraryComponent } from './login-library.component';
import { SocialLoginModule, AuthServiceConfig, FacebookLoginProvider, GoogleLoginProvider } from "angular-6-social-login";
import { CommonModule } from '@angular/common';
import { FacebookComponent } from './facebook/facebook.component';
import { GoogleComponent } from './Google/Google.component';
//import { environment } from 'src/environments/environment.prod';

export class A {

  public static FacebookProviderid;
  public static GoogleProviderId;

  public static getAuthServiceConfigs() {

    // this.envrmnt=this.environment

    let config = new AuthServiceConfig(
      [
        {
          id: FacebookLoginProvider.PROVIDER_ID,
          provider: new FacebookLoginProvider(A.FacebookProviderid)
        },

        {
          id: GoogleLoginProvider.PROVIDER_ID,
          provider: new GoogleLoginProvider(A.GoogleProviderId)
        }

      ]
    );
    return config;
  }
}

@NgModule({
  declarations: [LoginLibraryComponent, FacebookComponent,GoogleComponent],
  imports: [SocialLoginModule,
    CommonModule
  ],
  providers: [
    {
      provide: AuthServiceConfig,
      useFactory: A.getAuthServiceConfigs
    }
  ],
  //bootstrap: [LoginLibraryComponent],
  exports: [LoginLibraryComponent, FacebookComponent,GoogleComponent]
})

export class LoginLibraryModule {
  constructor(@Inject('environment')
  environment) {
    console.log(environment)
    A.FacebookProviderid = environment.clientID.facebook
    A.GoogleProviderId=environment.clientID.google
    console.log(5, A.FacebookProviderid);
    console.log(6, A.GoogleProviderId);
  }
  
}
