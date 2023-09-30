import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../services/api.service';   

@Component({
  selector: 'app-view-contact',
  templateUrl: './view-contact.component.html',
  styleUrls: ['./view-contact.component.css']
})

export class ViewContactComponent implements OnInit {

  contactId:string=''  // to hold id of the contact

  contact:any=[] // to hold resultil olla contact information

  groupId:string='' // to hold group od of contact

  groupName:string='' // variable to hold group name

 constructor(private activatedRoute:ActivatedRoute,private api:ApiService){}

  ngOnInit(): void {   
    // get id from the url
    this.activatedRoute.params.subscribe((data:any)=>{
      console.log(data); // Id"1" type is object
      console.log(data.Id);// (1) ithu cheythei id de number mathram varan vendittu ahnu
      this.contactId=data.Id

      // get details from a particular contact
      this.api.viewContactDetails(this.contactId).subscribe((result:any)=>{
        console.log(result); // type objcta ahnu ithu pass cheytha i de result edukkan vendittu
       this.contact=result

       //group name kittan ayittu
       this.groupId=result.GroupId
       console.log(this.groupId);
       
        this.api.getGroupName(this.groupId).subscribe((data:any)=>{
          console.log(data); //{id: '1', name: 'company'}ingane kittum
         // console.log(data.name);
          this.groupName=data.name
          console.log(this.groupName);
           
          
        })
      })
    })

  }
}
