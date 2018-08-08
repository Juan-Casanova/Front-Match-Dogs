import{ModuleWithProviders}from'@angular/core';
import {Routes,RouterModule}from '@angular/router';

//COMPONENTS
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { HomeComponent } from './components/home/home.component';
import { MuroComponent } from './components/muro/muro.component';
import { DogComponent } from './components/dog/dog.component';
//import {ProfileComponent}from './components/profile/profile.component'

const appRoutes:Routes=[
    {path:'',component:LoginComponent},
    {path:'home',component:HomeComponent},
    {path:'login',component:LoginComponent},
    {path:'registro',component:RegisterComponent},
    {path:'muro',component:MuroComponent},
    {path:'pet',component:DogComponent}
    //{path:'perfil',component:ProfileComponent}
];

export const appRoutingProviders:any[]=[];
export const routing:ModuleWithProviders=RouterModule.forRoot(appRoutes);