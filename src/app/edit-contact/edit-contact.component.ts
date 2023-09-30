import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../services/api.service';
import { MyContact } from 'src/model/myContact';
import { MyGroup } from 'src/model/myGroup';

@Component({
  selector: 'app-edit-contact',
  templateUrl: './edit-contact.component.html',
  styleUrls: ['./edit-contact.component.css']
})
export class EditContactComponent implements OnInit {
   
  contactId:string='' // to hold th id of the contact

  contact:MyContact={} // to hold contact details

  groups:MyGroup[]=[] // to hold all the groups

   constructor(private activatedRoute:ActivatedRoute,private api:ApiService,private route:Router){} 

  ngOnInit(): void {
   this.activatedRoute.params.subscribe((data:any)=>{
    console.log(data); //{contactId: '1 '}
    console.log(data.contactId); // 1
    this.contactId=data.contactId
   // call api for getting particular conntact details
   this.api.viewContactDetails(this.contactId).subscribe((result:any)=>{
    console.log(result);// contact details as object
    this.contact=result;
    // call api for getting group information
    this.api.getAllGroups().subscribe((data:any)=>{
      console.log(data);
      this.groups=data
      
    })
  })
  })
  }

  updateContact(){
    this.api.updateContact(this.contactId,this.contact).subscribe((result:any)=>{
      console.log(result);
      this.route.navigateByUrl('/')
      
    })
  }

}
