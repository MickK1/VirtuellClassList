import { Component, OnInit } from '@angular/core';
import { Student } from '../student';
import * as $ from 'jquery';
import { UserManagmentService } from '../user-managment.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  public user: Student;

  constructor(private userService: UserManagmentService, private router: Router) {
  }

  ngOnInit() {
  }

  LogIn() {
    
    // Creates a new User when he 'loggs in'.
    this.user = new Student(
      $("#Name").val().toString(),
      $("#Email").val().toString(),
      $("#Password").val().toString());

    // Checks if the Password is correct.
    if (this.user.password == "test"){
      this.userService.userSubject$.next(this.user);
      this.router.navigateByUrl("/profile");
    } 
    else alert("Wrong Password, try again!")
  }
}
