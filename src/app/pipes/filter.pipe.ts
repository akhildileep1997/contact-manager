import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(allContacts:any[],searchTerm:string,propsName:string): any[] {
    
    const result:any[] = [];

    if(!allContacts||searchTerm==''||propsName==''){
     return allContacts;
    }
    allContacts.forEach((contact:any)=>{
      // if(contact[propsName==searchTerm])(itanu concept but athu chryane vere rethil thazhe)
      if(contact[propsName].trim().toLowerCase().includes(searchTerm.trim().toLowerCase()))
      result.push(contact)
    })


    return result;
  }

}
