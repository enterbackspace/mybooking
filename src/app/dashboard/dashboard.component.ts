import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { ServiceService } from '../service.service';
import { MatDialog } from '@angular/material/dialog';
import { ProfileComponent } from '../profile/profile.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  constructor(public toastr:ToastrService,public login:ServiceService,public Dialog:MatDialog){}
searchText:any[]=[]
date=new Date()
 profile:any=[];
 ngOnInit(){
  this.profile=this.login.getItem('profile')
 }
 open(){
  this.Dialog.open(ProfileComponent,{
    width:'50%',
    height:'50%'

  })
 }



}
