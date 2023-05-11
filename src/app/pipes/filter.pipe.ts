import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {
  result: any= [];

  transform(allstudent:any[],searchkey: string,propName:string): any[] {
     const  result:any = []
    if(!allstudent||searchkey==''||propName==''){
      return allstudent  ;
    }
    allstudent.forEach((student:any)=>{
      if(student[propName].trim().toLowerCase().includes(searchkey.toLowerCase())){
        result.push(student)
        console.log(`result=${result}`);
        
      }
    })

    return result;
  }

}
