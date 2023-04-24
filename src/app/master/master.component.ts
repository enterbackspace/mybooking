import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ServiceService } from '../service.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-master',
  templateUrl: './master.component.html',
  styleUrls: ['./master.component.css']
})
export class MasterComponent implements OnInit {
  constructor(public fb:FormBuilder,public http:HttpClient,public route:Router,public ss:ServiceService,public toastr:ToastrService){
  window.localStorage.clear()
  }

  MasterForm:FormGroup
  ngOnInit(): void {
   this.MasterForm=this.fb.group({
      // username:new FormControl(1),
      MasterKey:new FormControl('',Validators.required)
    })
  }

   master:any={}
  
submit(){

  this.ss.getMasterpassword(1).subscribe((res)=>{
this.master=res
if(this.master.password===this.MasterForm.value.MasterKey){
  window.localStorage.setItem('Industry',this.master.Industry)
  this.toastr.success('you enter correct password','horray')
  this.route.navigate(['/ar'])
  


}else{
  this.toastr.error('you enter incorrect password','Are you Admin'  )
}
  })
  


}

}
