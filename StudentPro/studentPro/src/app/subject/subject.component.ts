import { Component, OnInit } from '@angular/core';
import { UserManagmentService } from '../user-managment.service';

@Component({
  selector: 'app-subject',
  templateUrl: './subject.component.html',
  styleUrls: ['./subject.component.css']
})
export class SubjectComponent implements OnInit {
public subjects: string[] = []
  constructor(private userService: UserManagmentService) { }

  ngOnInit(): void {
    this.userService.userSubject$.subscribe(observer => {
      this.subjects = observer.subjects;
      console.log(this.subjects);
    })
  }

  removeSubject(subject){
    let subjectIndex = this.subjects.indexOf(subject);
    this.subjects.splice(subjectIndex, 1);
  }
}
