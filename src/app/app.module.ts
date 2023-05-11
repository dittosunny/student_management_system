import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StudentsComponent } from './students/students.component';
import { ViewStudentDetailsComponent } from './view-student-details/view-student-details.component';
import { UpdateStudentDetailsComponent } from './update-student-details/update-student-details.component';
import { AddStudentDetailsComponent } from './add-student-details/add-student-details.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { FilterPipe } from './pipes/filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    StudentsComponent,
    ViewStudentDetailsComponent,
    UpdateStudentDetailsComponent,
    AddStudentDetailsComponent,
    PageNotFoundComponent,
    NavbarComponent,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
