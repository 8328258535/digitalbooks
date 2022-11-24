import { Component, OnInit } from '@angular/core';
import AuthorLogin from 'src/app/Entity/AuthorLogin';
import { AuthorLoginService } from 'src/app/Services/author-login.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  authorlogin:AuthorLogin = new AuthorLogin();

  save(){
    console.log(this.authorlogin);

    const observable = this.authorloginservice.authorLogin(this.authorlogin);
    observable.subscribe(
      (response:any) =>{
        console.log(response);
      }
    )
  }

  constructor( private authorloginservice:AuthorLoginService) { }

  ngOnInit(): void {
  }

}
