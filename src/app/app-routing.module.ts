import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactManagerComponent } from './contact-manager/contact-manager.component';
import { AddContactComponent } from './add-contact/add-contact.component';
import { ViewContactComponent } from './view-contact/view-contact.component';
import { EditContactComponent } from './edit-contact/edit-contact.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  {
    //   localhost:4200 ------> localhost:4200/contactManager etc path match full cheyanei eppolum aa slash ittu varan vendi ahnu
    // path ''  indicates localhost4200
    path:'',redirectTo:'contactManager',pathMatch:'full'
  },
  // actual setting path
  {
    // listing all contacts details path  localhost4200/contactManager
    path:'contactManager',component:ContactManagerComponent
  },
  {// add new contacts to the page-localhost4200/contactManager/addContact
    path:'contactManager/addContact',component:AddContactComponent
  },
  // path for viewing a particular contact
  {
    path:'contactManager/viewContact/:Id' ,component:ViewContactComponent
  },
  //edit a particular contact detail
  {
    path:'contactManager/editContact/:contactId',component:EditContactComponent
  },
  // path not found page
  {
  path:'**',component:PageNotFoundComponent 
  }  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
