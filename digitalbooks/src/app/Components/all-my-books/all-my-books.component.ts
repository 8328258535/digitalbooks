import { Component, OnInit } from '@angular/core';
import Book from 'src/app/Entity/Book';
import { BookService } from 'src/app/Services/book.service';

@Component({
  selector: 'app-all-my-books',
  templateUrl: './all-my-books.component.html',
  styleUrls: ['./all-my-books.component.css']
})
export class AllMyBooksComponent implements OnInit {


  book:Book[] = [];
  constructor(private bookService:BookService) { }

  ngOnInit(): void {

    const promise = this.bookService.getBooks();

    promise.subscribe(
      (response) =>{
        console.log(response);
        this.book = response as Book[];
      }
    )

  }

}
