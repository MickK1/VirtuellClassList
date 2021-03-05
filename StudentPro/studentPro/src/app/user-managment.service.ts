import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Student } from '../app/student';

@Injectable({
  providedIn: 'root'
})
export class UserManagmentService {
  public userSubject$: BehaviorSubject<Student>;

  constructor() { 
    this.userSubject$ = new BehaviorSubject<Student>(null);
  }
}
