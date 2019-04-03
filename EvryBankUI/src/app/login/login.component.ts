import { Component, OnInit } from '@angular/core';
import {FormGroup,FormControl,FormBuilder,FormsModule,Validators} from '@angular/forms';
import{Router} from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginCredentials:FormGroup;
  constructor(private FormBuilder:FormBuilder,private Router:Router) { }

  ngOnInit() {
    this.loginCredentials=this.FormBuilder.group({
      uname:['',Validators.required],
      password:['']
    })
  }
  LoginUserSubmit(data){
console.log(data);
this.Router.navigate(['/User']);
  }
}
