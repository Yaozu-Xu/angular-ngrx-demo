import { Action, createReducer, on, State } from '@ngrx/store';
import { StudentInfo, HttpErrorResponse } from './student.model';
import { changeClassRoom, loadStudentInfoSuccess, loadStudentInfoFailed } from './student.action';

export const studentFeatureKey = 'student';

export interface StudentState {
  studentInfo: StudentInfo[];
  classroomSelected: string;
  error: HttpErrorResponse | null
}

export const studentInitialState: StudentState = {
  studentInfo: [],
  classroomSelected: 'Class 1',
  error: null
};

const reducer = createReducer(
  studentInitialState,
  //@ts-ignore
  on(changeClassRoom, (state, { classroom }) => ({
    ...state,
    classroomSelected: classroom,
  })),
  //@ts-ignore
  on(loadStudentInfoSuccess, (state, { studentInfo }) => ({
    ...state,
    studentInfo,
  })),
  //@ts-ignore
  on(loadStudentInfoFailed, (state, { error }) => ({
    ...state,
    error,
  })),
  
);

export function studentReducer(
  state: StudentState | undefined,
  action: Action
): StudentState {
  return reducer(state, action);
}
