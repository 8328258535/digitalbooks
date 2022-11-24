import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SigninComponent } from './Components/signin/signin.component';
import { SignupComponent } from './Components/signup/signup.component';
import { AllMyBooksComponent } from './Components/all-my-books/all-my-books.component';
import { LogoutComponent } from './Components/logout/logout.component';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { AddbookComponent } from './Components/addbook/addbook.component';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './Components/home/home.component';
import { AddAccountComponent } from './Components/add-account/add-account.component';
import { MessageComponent } from './Components/message/message.component';
import { ItemsComponent } from './Components/items/items.component';


@NgModule({
  declarations: [
    AppComponent,
    SigninComponent,
    SignupComponent,
    AllMyBooksComponent,
    LogoutComponent,
    NavbarComponent,
    AddbookComponent,
    HomeComponent,
    AddAccountComponent,
    MessageComponent,
    ItemsComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
