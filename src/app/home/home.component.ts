import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  constructor(public fb:FormBuilder,public http:HttpClient){
  }
  registerForm = this.fb.group({
    id:this.fb.control('',Validators.compose([Validators.required,Validators.minLength(5)])),
    name:this.fb.control('',Validators.compose([Validators.required])),
    password:this.fb.control('',Validators.compose([Validators.required,Validators.pattern('^(?=.*[A-Z])(?=.*[0-9])(?=.*[a-z]).{8,}$')])),
    email:this.fb.control('',Validators.compose([Validators.required,Validators.email])),
    gender:this.fb.control('',Validators.compose([Validators.required])),
    role:this.fb.control(''),
    isactive:this.fb.control(true),

  })
  proceedRegistration(){

    this.http.post("http://localhost:3000/register",this.registerForm.value).subscribe((res)=>{
      console.log(res)
    })
  }



}
