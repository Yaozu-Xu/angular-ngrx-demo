import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { StudentInfo } from '../store/student/student.model';
import { studentInfoMock } from './mock';

@Injectable()
export class StudentService {
  getStudentInfo(): Observable<StudentInfo[]> {
    return of(studentInfoMock);
  }
}
