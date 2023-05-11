import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddStudentDetailsComponent } from './add-student-details/add-student-details.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { StudentsComponent } from './students/students.component';
import { UpdateStudentDetailsComponent } from './update-student-details/update-student-details.component';
import { ViewStudentDetailsComponent } from './view-student-details/view-student-details.component';

const routes: Routes = [

   {path:'',redirectTo:'students/admin',pathMatch:'full'},
   {path:'students/admin', component:StudentsComponent},
   {path:'students/view/:studentid', component:ViewStudentDetailsComponent},
   {path: 'students/update/:Id', component:UpdateStudentDetailsComponent},
   {path: 'students/add', component:AddStudentDetailsComponent},
   { path: '**',component:PageNotFoundComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
