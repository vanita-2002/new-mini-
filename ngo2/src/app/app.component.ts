import { Component } from '@angular/core';
import {FormControl,FormGroup} from '@angular/forms'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Enter Your Details:';
  loginForm = new FormGroup({
    user: new FormControl(''),
    password: new FormControl(''),
    email:new FormControl(''),
    contact:new FormControl(''),
    occupation:new FormControl(''),
    location:new FormControl(''),
    pay:new FormControl(''),
    amt:new FormControl(''),
  })
  loginUser(){
    console.log(this.loginForm.value);
  }
}
