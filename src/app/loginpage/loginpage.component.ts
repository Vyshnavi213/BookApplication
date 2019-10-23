import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-loginpage',
  templateUrl: './loginpage.component.html',
  styleUrls: ['./loginpage.component.css']
})
export class LoginpageComponent implements OnInit {

  
  model: any = {};

  constructor(private route: Router) { }

  ngOnInit() {
  }

  register(form) {
    if (form.value.username == "hello" && form.value.Password == "hello") {
      localStorage.setItem('username', form.value.username);
      console.log(localStorage.getItem('username'));
      this.route.navigate(['home']);
    }
    else {
      alert("Invalid user");
    }
  }

  loginToRegister() {
    this.route.navigate(['register']);
  }
}