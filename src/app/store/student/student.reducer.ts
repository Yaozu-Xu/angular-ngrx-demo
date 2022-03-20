import { Action, createReducer, on, State } from '@ngrx/store';
import { StudentInfo } from './student.model';
import { changeClassRoom, loadStudentInfoSuccess } from './student.action';

export const studentFeatureKey = 'student';

export interface StudentState {
  studentInfo: StudentInfo[];
  classroomSelected: string;
}

export const studentInitialState: StudentState = {
  studentInfo: [],
  classroomSelected: 'Class 1',
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
  }))
);

export function studentReducer(
  state: StudentState | undefined,
  action: Action
): StudentState {
  return reducer(state, action);
}
