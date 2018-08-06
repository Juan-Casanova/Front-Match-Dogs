import {Injectable} from '@angular/core';
import {HttpClient,HttpHeaders}from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
//import {GLOBAL}from './global.service'
import {User}from '../models/user';


@Injectable()
export class UserService{

    url="/";
    //public url:string;

    constructor(public _http:HttpClient){
        //this.url=url;
    }
    
    register(user:User):Observable<any>{
        let params= JSON.stringify(user);
        let headers=new HttpHeaders().set('Content-Type','application/json');

        return this._http.post(this.url+'register',params,{headers:headers});
    }

    signup(user:User,gettoken=null):Observable<any>{
        if(gettoken != null){
            //User.gettoken=gettoken;
        }
        let params=JSON.stringify(user);
        let headers=new HttpHeaders().set('Content-Type','application/json');

        return this._http.post(this.url+'login',params, { headers:headers})
    }
}