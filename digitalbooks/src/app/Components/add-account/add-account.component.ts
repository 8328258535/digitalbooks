import { Component, OnInit } from '@angular/core';
import Author from 'src/app/Entity/Author';
import { AuthorService } from 'src/app/Services/author.service';

@Component({
  selector: 'app-add-account',
  templateUrl: './add-account.component.html',
  styleUrls: ['./add-account.component.css']
})
export class AddAccountComponent implements OnInit {

  author:Author=new Author();

  save(){
    console.log(this.author);

    const observable = this.authorService.saveAuthor(this.author)
    observable.subscribe(
      (response:any) =>{
        console.log(response);
      }
    )
  }

  constructor(private authorService:AuthorService) { }

  ngOnInit(): void {
  }

}
