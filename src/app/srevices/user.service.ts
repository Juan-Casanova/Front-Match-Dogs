import {Injectable} from '@angular/core';
import {HttpClient,HttpHeaders}from '@angular/common/http';
//import {Http,Response}from '@angular/http';
//import { map } from 'rxjs/operators';
//import {GLOBAL}from './global.service'
import {User}from '../models/user';
import { Observable } from 'rxjs/Observable';
import { pipe } from '@angular/core/src/render3/pipe';
//import { TagPlaceholder } from '@angular/compiler/src/i18n/i18n_ast';
import {of} from "rxjs/observable/of";
import { catchError, tap } from 'rxjs/operators';

const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' })}


@Injectable()

export class UserService{

    public url:string="/";
    public identity;
    public token; 
    //public url:string;

    constructor(private _http:HttpClient){}
    
    register(user:User):Observable<any>{
        let params=JSON.stringify(user);
        let headers=new HttpHeaders().set('Content-Type','applicaction/json');
        
        //console.log(params)
        // return this._http.post<User>(this.url+'register',params,httpOptions),pipe(
        //     tap((_ => this.log(`fetched hero id=${id}`)),
        //     catchError(this.handleError<User>(`getUser id=${id}`)))
        return this._http.post(this.url + 'register',params,{headers:headers})
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