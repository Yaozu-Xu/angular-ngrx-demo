import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ComponentsModule } from './components/components.module';
import { StoreModule } from '@ngrx/store';
import { studentFeatureKey, studentReducer } from './store/student/student.reducer';
import { StudentFacade } from './store/student/student.facade';
import { CommonModule } from '@angular/common';
import { EffectsModule } from '@ngrx/effects';
import { StudentEffects } from './store/student/student.effect';
import { StudentService } from './api/student.service';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    ComponentsModule,
    CommonModule,
    StoreModule.forFeature(studentFeatureKey, studentReducer),
    StoreModule.forRoot({}),
    EffectsModule.forRoot([StudentEffects])
  ],
  providers: [StudentFacade, StudentService],
  bootstrap: [AppComponent]
})
export class AppModule { }
