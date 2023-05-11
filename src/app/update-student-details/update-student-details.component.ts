import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Mystudent } from 'src/model/mystudent';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-update-student-details',
  templateUrl: './update-student-details.component.html',
  styleUrls: ['./update-student-details.component.css']
})
export class UpdateStudentDetailsComponent {
  
 studentid:string='';
 student:Mystudent={}
 constructor(private activatedRoute:ActivatedRoute,private api:ApiService,private route:Router) {}

 ngOnInit():void{

  this.activatedRoute.params.subscribe((data:any)=>{
    console.log(data.Id);
    this.studentid=data.Id

    this.api.viewstudent(this.studentid).subscribe((data:any)=>{
      console.log(data);
      this.student=data

      // this.api.getallstudents().subscribe((data:any)=>{
      //   console.log(data);
        
      //  })
    })
  })
}
  updatestudent(){
    this.api. updatestudent(this.studentid,this.student).subscribe((data:any)=>{
     this.route.navigateByUrl('') 
  })
 }
 }

