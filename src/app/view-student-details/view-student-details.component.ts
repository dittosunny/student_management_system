import { Component,OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-view-student-details',
  templateUrl: './view-student-details.component.html',
  styleUrls: ['./view-student-details.component.css']
})
export class ViewStudentDetailsComponent  implements OnInit{
  studentid:string=''
  student:any;
  groupid: any;
  groupname:any;

  constructor(private api:ApiService,private activatedRoute:ActivatedRoute){}
   

  ngOnInit():void {

    this.activatedRoute.params.subscribe((data:any)=>{
      console.log(data);//id - contactId->3
      this.studentid=data.studentid

this.api.viewstudent(this.studentid).subscribe((data:any)=>{
  console.log(data);
  this.student=data
  this.groupid=data.groupid

   
 
})

})
  
}
}