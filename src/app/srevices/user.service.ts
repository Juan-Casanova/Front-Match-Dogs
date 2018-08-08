import {Injectable} from '@angular/core';
import {HttpClient,HttpHeaders}from '@angular/common/http';
//import {Http,Response}from '@angular/http';
import { map } from 'rxjs/operators';
//import {GLOBAL}from './global.service'
import {User}from '../models/user';
import { Observable } from 'rxjs';


@Injectable()

export class UserService{

    public url:string;
    public identity;
    public token; 
    //public url:string;

    constructor(public _http:HttpClient){
        //this.url=url;
        this.url="http://localhost:3000";
    }
    
    register(user:User):Observable<any>{
        let params=JSON.stringify(user);
        let headers=new HttpHeaders().set('Content-Type','applicaction/json');
        
        //console.log("estamos aqui papu")
      return this._http.post(this.url+'register',params,{headers:headers});
        // return this._http.post(this.url + 'signup', user)
        // .pipe(map((res: Response) => res.json()))
    }

    signup(user:User,gettoken=null):Observable<any>{
        if(gettoken != null){
            //User.gettoken=gettoken;
        }
        let params=JSON.stringify(user);
        let headers=new HttpHeaders().set('Content-Type','application/json');

        return this._http.post(this.url+'login',params, { headers:headers})
    }

    getIdentity(){
        let identity=JSON.parse(localStorage.getItem('identity'));

        if(identity!="undefined"){
            this.identity=identity
        }
        else{
            this.identity=null;
        }
        return this.identity
    }
    getToken(){
        let token=localStorage.getItem('token');

        if(token != "undefined"){
            this.token=token;
        }
        else{
            this.token=null
        }
        return this.token;
    }
}