import { props, createAction } from '@ngrx/store';
import { StudentInfo } from './student.model';

export const changeClassRoom = createAction(
  '[Student] Select current classRoom',
  props<{ classroom: string }>()
);

export const loadStudentInfo = createAction('[Student] load student info');

export const loadStudentInfoSuccess = createAction(
  '[Student API] load student info success',
  props<{ studentInfo: StudentInfo[] }>()
);
