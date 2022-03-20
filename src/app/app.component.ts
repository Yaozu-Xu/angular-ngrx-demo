import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { StudentFacade } from './store/student/student.facade';
import { StudentInfo } from './store/student/student.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  ngOnInit(): void {
    this.studentFacade.loadStudentInfo();
  }
  currentClassroom$: Observable<string> = this.studentFacade.currentClassroom$;
  studentInfo$: Observable<StudentInfo[]> = this.studentFacade.studentInfo$;

  constructor(private studentFacade: StudentFacade) {}
}
