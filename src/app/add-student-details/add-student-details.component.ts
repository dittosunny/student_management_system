import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../services/api.service';
import {Mystudent } from 'src/model/mystudent';




@Component({
  selector: 'app-add-student-details',
  templateUrl: './add-student-details.component.html',
  styleUrls: ['./add-student-details.component.css']
})
export class AddStudentDetailsComponent implements OnInit{
  group: any;
  
  allstudent: any[]=[];
  student: Mystudent={}
  constructor(private api:ApiService,private route:Router){ }

  
  
  ngOnInit(): void {
   this.api.getallstudents().subscribe((data:any)=>{
      console.log(data);
      this.allstudent = data
      
    })
  }
  
  
   addstudent(){
    this.api.addstudent(this.student).subscribe((data:any)=>{
      this.route.navigateByUrl('')
    })
  }

}
