import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
const BASE_URL = "http://ec2-13-230-2-56.ap-northeast-1.compute.amazonaws.com:8088/signin"

@Injectable({
  providedIn: 'root'
})
export class AuthorLoginService {

  authorLogin(authorlogin:{
    authoremail:String;
    authorpassword:String;
  }){
    return this.http.post(BASE_URL,authorlogin);
  }


  constructor(public http:HttpClient ) { }
}
