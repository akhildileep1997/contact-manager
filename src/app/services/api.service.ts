import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Observable} from 'rxjs' ;
import { MyContact } from 'src/model/myContact';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  // dependancy injection 
  constructor(private http:HttpClient) { }

  //get function for getting all contact details
  getAllContact():Observable<MyContact>{
       return this.http.get(' http://localhost:3000/contacts')
       
  }

  // view particular contactinu vendi olla function
  viewContactDetails(contactId:string){
    return this.http.get(`http://localhost:3000/contacts/${contactId}`)
  }

  //get group information  (ivide nadakkane api call for getting group name)
  // (18/37/2023  tuesday)
  getGroupName(GroupId:string){
    return this.http.get(` http://localhost:3000/groups/${GroupId}`)
  }
// thursday 20/07/2023
addContact(contactBody:any){
  return this.http.post(`http://localhost:3000/contacts`,contactBody)
}
//api call for get group details
getAllGroups(){
  return this.http.get(`http://localhost:3000/groups`)
}

// api call for deleta a particular contact
deleteContact(contactId:any){
  return this.http.delete(`http://localhost:3000/contacts/${contactId}`)
}

//update specific contact
updateContact(contactId:any,contactBody:any){
   return this.http.put(`http://localhost:3000/contacts/${contactId}`,contactBody)
}
}





