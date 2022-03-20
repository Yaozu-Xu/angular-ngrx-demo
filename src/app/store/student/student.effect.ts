import { Injectable } from '@angular/core';
import { createEffect, ofType, Actions } from '@ngrx/effects';
import { map, switchMap, catchError } from 'rxjs/operators';
import { EMPTY } from 'rxjs';
import { StudentService } from '../../api/student.service';
import { loadStudentInfo, loadStudentInfoSuccess } from './student.action';
import { StudentInfo } from './student.model';

@Injectable()
export class StudentEffects {
  loadStudentInfo$ = createEffect(() =>
    this.action$.pipe(
      ofType(loadStudentInfo.type),
      switchMap(() =>
        this.studentService.getStudentInfo().pipe(
          map((studentInfo: StudentInfo[]) =>
            loadStudentInfoSuccess({ studentInfo })
          ),
          catchError(() => EMPTY)
        )
      )
    )
  );

  constructor(
    private action$: Actions,
    private studentService: StudentService
  ) {}
}
