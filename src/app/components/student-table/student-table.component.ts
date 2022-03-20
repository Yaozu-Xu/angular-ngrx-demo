import { Component, OnInit, Input } from '@angular/core';
import { StudentInfo } from '../../store/student/student.model';

@Component({
  selector: 'app-student-table',
  templateUrl: './student-table.component.html',
  styleUrls: ['./student-table.component.scss'],
})
export class StudentTableComponent implements OnInit {
  @Input() currentClassroom!: string | null;
  @Input() studentInfo!: StudentInfo[] | null;

  constructor() {}

  ngOnInit(): void {}
}
