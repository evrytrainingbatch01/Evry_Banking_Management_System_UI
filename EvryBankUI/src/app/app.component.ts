import { Component } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'EvryBankUI';

  constructor(private Router:Router) { }
  SignUpPage(){
   // alert("inside ")
    this.Router.navigate(['/Login']);
  }
  LoginPage(){
    this.Router.navigate(['/Login']);
  }
}
