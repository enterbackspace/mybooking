import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddItemComponent } from './add-item/add-item.component';
import { ProductComponent } from './product/product.component';
import { ProductdetailsComponent } from './productdetails/productdetails.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RegComponent } from './reg/reg.component';
import { MasterComponent } from './master/master.component';
import { AdminRegisterationComponent } from './admin-registeration/admin-registeration.component';
import { GuardGuard } from './guard.guard';
import { MasterGuard } from './master.guard';

const routes: Routes = [
 
 {
  path:'log',
  component:LoginComponent
},
  { path: '', pathMatch: 'full', redirectTo: '/log' },
  {path:'reg',component:RegComponent},
  
  {path:'master',component:MasterComponent


  },
  {path:'ar',component:AdminRegisterationComponent,
  canActivate:[MasterGuard]
},

  {
  path:'dash',
  component:DashboardComponent,
  canActivate:[GuardGuard],
  children:[
    {
      path:'product',
      component:ProductComponent
    },{
      path:'pd',
      component:ProductdetailsComponent
    },
  ]
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
