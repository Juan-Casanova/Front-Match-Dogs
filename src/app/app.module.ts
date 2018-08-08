import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule}from'@angular/forms';
//import {HttpModule}from'@angular/http';
import {HttpClientModule} from '@angular/common/http';
import {routing,appRoutingProviders}from './routing';


declare var jQuery:any;
declare var $:any;

import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { HomeComponent } from './components/home/home.component';
import { MuroComponent } from './components/muro/muro.component';
import { DogComponent } from './components/dog/dog.component';

//import { ProfileComponent } from './profile/profile.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    MuroComponent,
    DogComponent,

   // ProfileComponent   
  ],
  imports: [
    BrowserModule,
    FormsModule,
    routing,
    HttpClientModule
  ],
  providers: [
    appRoutingProviders
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
