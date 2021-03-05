import { Component, Input, OnChanges, OnInit, Output } from '@angular/core';
import { Student } from '../student';
import { UserManagmentService } from '../user-managment.service';

@Component({
  selector: 'app-studentporfile',
  templateUrl: './studentporfile.component.html',
  styleUrls: ['./studentporfile.component.css']
})
export class StudentporfileComponent implements OnInit {
  public user: Student;

  constructor(private userService: UserManagmentService) {
  }

  ngOnInit(){
    this.userService.userSubject$.subscribe(observer => {
      this.user = new Student();
      this.user = observer;
    });
  }

  addSubjects(){
    if($("#Subject").val()){
      this.user.subjects.push($("#Subject").val().toString());
      this.userService.userSubject$.next(this.user);
      $("#Subject").val("");
    }
  }
}
