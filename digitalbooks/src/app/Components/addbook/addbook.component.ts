import { Component, OnInit } from '@angular/core';
import Book from 'src/app/Entity/Book';
import { BookService } from 'src/app/Services/book.service';

@Component({
  selector: 'app-addbook',
  templateUrl: './addbook.component.html',
  styleUrls: ['./addbook.component.css']
})
export class AddbookComponent implements OnInit {

  book:Book = new Book();

  save(){
    console.log(this.book)

    const observable = this.bookService.saveBook(this.book);
    observable.subscribe(
      (response:any) =>{
        console.log(response);
      })

  
  }

  constructor(private bookService:BookService) { }

  ngOnInit(): void {
  }

}
