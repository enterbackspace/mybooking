import { Component, Inject, inject } from '@angular/core';
import { FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { FormBuilder } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { ServiceService } from '../service.service';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.css']
})
export class AddItemComponent {
  type=[{value:'veg',viewvalue:'VEG'},{value:'non-veg',viewvalue:'Non-VEG'}]
  actionBtn:string='Submit';
  quote:string="Add Vegitables"
registerForm:FormGroup
  constructor(public fb:FormBuilder,private http:HttpClient,
    @Inject(MAT_DIALOG_DATA) public edit:any,
    public dialog:MatDialogRef<AddItemComponent>,
    public ss:ServiceService,
    public toastr:ToastrService
 ){}
 ngOnInit(){
  this.registerForm = this.fb.group({
    productId:this.fb.control('',Validators.compose([Validators.required,Validators.minLength(5)])),
    ProductName:this.fb.control('',Validators.compose([Validators.required])),
    Quantity:this.fb.control('',Validators.compose([Validators.required,])),
    Ingerdiance:this.fb.control('',Validators.required),
    type:this.fb.control('',Validators.compose([Validators.required])),
    isactive:this.fb.control(true),
    imageUrl:this.fb.control('',Validators.required),
    mrp:this.fb.control('',Validators.required),
    price:this.fb.control('',Validators.required),
    discount:this.fb.control('',Validators.required)



  })
  if(this.edit){
    this.actionBtn="Update";
    this.quote="Edit Products Details";
    this.registerForm.controls['ProductName'].setValue(this.edit.ProductName)
    this.registerForm.controls['productId'].setValue(this.edit.productId)
    this.registerForm.controls['Quantity'].setValue(this.edit.Quantity)
    this.registerForm.controls['Ingerdiance'].setValue(this.edit.Ingerdiance)
    this.registerForm.controls['imageUrl'].setValue(this.edit.imageUrl)
    this.registerForm.controls['mrp'].setValue(this.edit.mrp)
    this.registerForm.controls['price'].setValue(this.edit.price)
    this.registerForm.controls['discount'].setValue(this.edit.discount)
  }
}
    
  proceedRegistration(){
    if(!this.edit){
      if(this.registerForm){
        this.http.post("http://localhost:3000/vegitable",this.registerForm.value).subscribe({
          next:(res)=>{
            this.toastr.success('Product Added Succesfully')
            this.registerForm.reset();

            console.log(res)
          
          },error:(err)=>{
            this.toastr.error('error while adding Data')
          }
        })
      }
    }else{
      this.Update()
    } 
  }
  Update(){
    this.ss.update(this.registerForm.value,this.edit.id).subscribe({
      next:(res)=>{
        alert("Details Update Succefully")
        this.toastr.success('Details Updated Succesfully')
        console.log(res);
        this.registerForm.reset();
        this.dialog.close('update')
      },
      error:(err)=>{
        this.toastr.error("error while Updating Details")
      }

    })
    
  }


}
