import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
const BASE_URL = "http://ec2-13-230-2-56.ap-northeast-1.compute.amazonaws.com:8088/signup"

@Injectable({
  providedIn: 'root'
})
export class AuthorService {

  saveAuthor(author:{
    authorName:String;
	
	  authoremail:String;
	
	  authorpassword:String;
  }){
    return this.http.post(BASE_URL,author)
  }

  constructor(public http:HttpClient) { }
}
