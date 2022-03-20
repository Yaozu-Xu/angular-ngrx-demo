import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import * as fromStudentSelectors from './student.selector';
import * as fromStudentActions from './student.action';
import { StudentInfo, HttpErrorResponse } from './student.model';
import { Store } from '@ngrx/store';

@Injectable()
export class StudentFacade {
  studentInfo$: Observable<StudentInfo[]> = this.store.select(
    fromStudentSelectors.studentInfoByClassSelector
  );

  currentClassroom$: Observable<string> = this.store.select(
    fromStudentSelectors.currentClassroom
  );

  studentInfoApiError$: Observable<HttpErrorResponse | null> = this.store.select(
    fromStudentSelectors.studentInfoApiError
  );

  changeClassRoom(classroom: string) {
    this.store.dispatch(fromStudentActions.changeClassRoom({ classroom }));
  }

  loadStudentInfo() {
    this.store.dispatch(fromStudentActions.loadStudentInfo());
  }

  constructor(private store: Store) {}
}
