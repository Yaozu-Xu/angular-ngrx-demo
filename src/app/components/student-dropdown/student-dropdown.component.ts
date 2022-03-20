import { Component, OnInit, Input } from '@angular/core';
import { StudentFacade } from '../../store/student/student.facade';

@Component({
  selector: 'app-student-dropdown',
  templateUrl: './student-dropdown.component.html',
  styleUrls: ['./student-dropdown.component.scss'],
})
export class StudentDropdownComponent implements OnInit {
  @Input() currentClassroom!: string | null;

  classroomList: string[] = ['Class 1', 'Class 2', 'Class 3', 'Class 4'];

  constructor(private studentFacade: StudentFacade) {}

  ngOnInit(): void {}

  onDropdownChange() {
    this.studentFacade.changeClassRoom(this.currentClassroom as string);
  }
}
