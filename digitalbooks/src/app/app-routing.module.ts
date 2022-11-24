import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddAccountComponent } from './Components/add-account/add-account.component';
import { AddbookComponent } from './Components/addbook/addbook.component';
import { AllMyBooksComponent } from './Components/all-my-books/all-my-books.component';
import { HomeComponent } from './Components/home/home.component';
import { MessageComponent } from './Components/message/message.component';
import { SigninComponent } from './Components/signin/signin.component';
import { SignupComponent } from './Components/signup/signup.component';

const routes: Routes = [{path:"",component:SigninComponent},
{path:"addaccount",component:AddAccountComponent},
{path:"addBook",component:AddbookComponent},
{path:"getBooks",component:AllMyBooksComponent},
{path:"message",component:MessageComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
