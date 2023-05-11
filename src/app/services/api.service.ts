import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Mystudent } from 'src/model/mystudent';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
 
  constructor(private http:HttpClient) { }

  baseurl:string =  ' http://localhost:3000/student'

  getallstudents():Observable<Mystudent> {   
   return this.http.get(this. baseurl)
}

  viewstudent(studentid:any){
  return this.http.get(`${this.baseurl}/${studentid}`)
}

   addstudent(studentdetails:any){
    return this.http.post(this.baseurl,studentdetails)
   }

   deleteContact(studentid:any){
    return this.http.delete(`${this.baseurl}/${studentid}`)
 }

 updatestudent(studentid:any,studentBody:any){
  return this.http.put(`${this.baseurl}/${studentid}`,studentBody )
}

}




