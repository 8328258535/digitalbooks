import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
const BASE_URL = "http://ec2-54-145-18-21.compute-1.amazonaws.com:8084/addBook"
const base_url = "http://ec2-54-145-18-21.compute-1.amazonaws.com:8084/getAll"

@Injectable({
  providedIn: 'root'
})
export class BookService {
    saveBook(book:{
     image: String;
	
	  tiltle:String;
	
	  category:String;
	
	  price:number;
	
	  author:String ;
	
	  publisher:String;
	
	  publishedDate:String;
	
	  content:String;
	
	  active:Boolean;
    }){
      return this.http.post(BASE_URL,book);
    }

	getBooks(){
		return this.http.get(base_url);
	}

  constructor(public http:HttpClient) { }
}
