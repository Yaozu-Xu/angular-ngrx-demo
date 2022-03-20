import { props, createAction } from '@ngrx/store';
import { StudentInfo, HttpErrorResponse } from './student.model';

export const changeClassRoom = createAction(
  '[Student] Select current classRoom',
  props<{ classroom: string }>()
);

export const loadStudentInfo = createAction('[Student] load student info');

export const loadStudentInfoSuccess = createAction(
  '[Student API] load student info success',
  props<{ studentInfo: StudentInfo[] }>()
);

export const loadStudentInfoFailed = createAction(
  '[Student API] load student info failed',
  props<{error: HttpErrorResponse}>()
);
