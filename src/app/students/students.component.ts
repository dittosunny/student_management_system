import { Component } from '@angular/core';
import { Mystudent } from 'src/model/mystudent';
import { ApiService } from '../services/api.service';
import { NavbarComponent } from '../navbar/navbar.component';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent {
  loginDate:any  
searchKey: string =''
 
  constructor(private api:ApiService){
    this.loginDate= new Date()
  }
   
  allstudent:Mystudent[]=[]


  ngOnInit():void {
    this.getallstudent()
  } 


  getallstudent(){
    this.api.getallstudents().subscribe((data:any)=>{

      console.log('getallstudent',data);
      this.allstudent = data
      
    })
  }

  // search(){
  //   console.log(this.navsearch.event);
  //   this.searchKey=this.navsearch.event;
  //   console.log(this.searchKey);
    
  // }


  search(event:any){
    console.log(event.target.value);
    this. searchKey=event.target.value
    console.log(this.searchKey);
    
  }

  
 

  deleteContact(studentid:any){
    this.api.deleteContact(studentid).subscribe((data:any)=>{
      alert("contact deleted")
      this.getallstudent()
    })
  }

 



}  

