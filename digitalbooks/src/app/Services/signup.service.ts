import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const BASE_URL = "http://localhost:8087/registerUser"

@Injectable({
  providedIn: 'root'
})
export class SignupService {

  saveUser(user:{
    fullName:String;
    emailAdress:String;
    passWord:String;
    createdDate:String;
  }){

    return this.http.post(BASE_URL,user)

  }

  constructor(public http:HttpClient) { }
}
