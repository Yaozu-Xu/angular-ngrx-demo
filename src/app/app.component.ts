import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { StudentFacade } from './store/student/student.facade';
import { StudentInfo, HttpErrorResponse } from './store/student/student.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  currentClassroom$: Observable<string> = this.studentFacade.currentClassroom$;
  studentInfo$: Observable<StudentInfo[]> = this.studentFacade.studentInfo$;
  studentInfoApiError$: Observable<HttpErrorResponse | null> = this.studentFacade.studentInfoApiError$;
  
  ngOnInit(): void {
    this.studentFacade.loadStudentInfo();
    this.studentInfoApiError$.subscribe((err) => {
      if(err) {
        alert(err.msg)
      }
    })
  }

  

  constructor(private studentFacade: StudentFacade) {}
}
