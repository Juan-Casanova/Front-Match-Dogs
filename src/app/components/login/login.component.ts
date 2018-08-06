import { Component, OnInit } from '@angular/core';
import {Router,ActivatedRoute,Params} from '@angular/router';
import { User}from '../../models/user'
import {UserService}from '../../srevices/user.service'

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers:[UserService]
})
export class LoginComponent implements OnInit {

  public title:string;
  public user:User;
  public status:string;

  constructor(
    private _route:ActivatedRoute,
    private _router:Router,
    private _userService:UserService
  ) { 
    this.title='IDENTIFICATE';
    this.user = new User("",
  "",
  "",
  "",
  "",
  "",
  "")
  }

  ngOnInit() {
    console.log('componente de login cargado...')
  }

  onSubmit(){
   this._userService.signup(this.user).subscribe(
     response=>{

     },
     error=>{
        var errorMessage
     }
   )
  }

}
