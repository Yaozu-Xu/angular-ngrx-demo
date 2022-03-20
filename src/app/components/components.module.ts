import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { StudentDropdownComponent } from './student-dropdown/student-dropdown.component';
import { StudentTableComponent } from './student-table/student-table.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [StudentDropdownComponent, StudentTableComponent],
  imports: [BrowserModule, FormsModule],
  exports: [StudentDropdownComponent, StudentTableComponent],
})
export class ComponentsModule {}
