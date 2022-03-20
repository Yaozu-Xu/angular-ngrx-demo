import { createFeatureSelector, createSelector } from '@ngrx/store';
import { studentFeatureKey, StudentState } from './student.reducer';

export const studentFeatureKeySelector = createFeatureSelector<StudentState>(
  studentFeatureKey
);

export const studentInfoByClassSelector = createSelector(
  studentFeatureKeySelector,
  (state: StudentState) =>
    state.studentInfo.filter((_) => _.class === state.classroomSelected)
);

export const currentClassroom = createSelector(
  studentFeatureKeySelector,
  (state: StudentState) => state.classroomSelected
);
