import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute,Params}from '@angular/router';
import {User}from '../../models/user';
import {UserService}from '../../srevices/user.service';

@Component({
  selector: 'register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  providers:[UserService]
})
export class RegisterComponent implements OnInit {

  public title:string;
  public user:User;

  constructor(
    private _route:ActivatedRoute,
    private _router:Router,
    private _userService:UserService
  ) { 
    this.title='REGISTRATE';
    this.user=new User("",
      "",
      "",
      "",
      "",
      "",
      "" )
  }

  ngOnInit() {
    console.log('componente de register cargado...')
  }

  onSubmit(){
    this._userService.register(this.user).subscribe(
    response =>{
      if(response.user && response.user._id){
        console.log(response.user);
      }
    },
    error =>{
      console.log(<any>error);
    }
    
    );
  }
}
