import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ServiceService } from '../service.service';
import { ToastrService } from 'ngx-toastr';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  userData:any;
  user:any;

  constructor(public fb:FormBuilder,public route:Router,public ss:ServiceService,public toastr:ToastrService ){
    sessionStorage.clear();
  }
  loginForm=this.fb.group({
    username:this.fb.control('',Validators.required),
    password:this.fb.control('',Validators.required)
  }) 
         log(){ 
          if(this.loginForm.valid){
             this.ss.getBycode(this.loginForm.value.username).subscribe((res)=>{
              this.userData=res
              console.log(this.userData);
              console.log( this.userData.password===this.loginForm.value.password)
              if(this.userData.password===this.loginForm.value.password){
                  sessionStorage.setItem('username',this.userData.username)
                  sessionStorage.setItem('userrole',this.userData.role)
                  sessionStorage.setItem('name',this.userData.name)
                  sessionStorage.setItem('email',this.userData.email)
                  sessionStorage.setItem('profile',this.userData.profile)
                  this.route.navigate(['/dash/product'])
                  this.toastr.success(" login succesfully")             
              }else{
                alert("Incorrect Password")
                this.toastr.warning("incorrect Password,please Enter correct passsword ")
              }
            })
          }else{
            this.toastr.warning('please enter valid Information')
          }
         }
   
        loged(){  
          if(this.loginForm.valid){
            this.ss.login(this.loginForm.value)
          .subscribe((res:any)=>{
           this.user=res;
           console.log(this.user)
          //  if(this.user.password===this.loginForm.value.password){
             sessionStorage.setItem('username',this.user.username)
            
            this.route.navigate(['/dash/product'])
            this.toastr.success(" login succesfully")
         
            })
          
        }else{
          this.toastr.warning('please enter valid Information')
        
        }
      }
           
} 
// "profile":"assets/babu.jpeg",
// "username": "Babu26440",
// "password": "Babu@123",
// "email": "jb2467382@gmail.com",
// "gender": "male",
// "role": "user",
// "isactive": true,
// "id": 1