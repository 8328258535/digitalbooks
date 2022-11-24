import { Component, OnInit } from '@angular/core';
import Signup from 'src/app/Entity/register';
import { SignupService } from 'src/app/Services/signup.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  title = "Create your account"

  sigunp:Signup = new Signup();

  
  save(){
    console.log(this.sigunp);

    const observable = this.signupservice.saveUser(this.sigunp);
    observable.subscribe(
      (response:any) =>{
        console.log(response);
      })
  }


  constructor(private signupservice:SignupService ) { }

  ngOnInit(): void {
  }

}
