import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {LoginLibraryModule} from 'projects/login-library/src/public_api'
import { AppComponent } from './app.component';
import { environment } from 'src/environments/environment';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    LoginLibraryModule
  ],
  providers: [LoginLibraryModule,
    {provide: 'environment', useValue: environment}],
  bootstrap: [AppComponent]
})
export class AppModule { }
