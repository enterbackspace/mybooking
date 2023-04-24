import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import{MatButtonModule} from '@angular/material/button';
import{MatCardModule} from '@angular/material/card';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import{MatToolbarModule}from '@angular/material/toolbar'
import{MatSidenavModule}from '@angular/material/sidenav';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';
import { BusesComponent } from './buses/buses.component';
import{MatIconModule} from '@angular/material/icon';
import{MatFormFieldModule} from '@angular/material/form-field';
import{MatInputModule} from '@angular/material/input';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import{MatRadioModule}from '@angular/material/radio'
import { HttpClientModule } from '@angular/common/http';
import{MatListModule} from '@angular/material/list';
import { AddItemComponent } from './add-item/add-item.component';
import{MatSelectModule} from '@angular/material/select';
import { ProductComponent } from './product/product.component';
import { SearchPipe } from './search.pipe';
import { ProductdetailsComponent } from './productdetails/productdetails.component';
import{MatDialogModule}from '@angular/material/dialog';
import { LoginComponent } from './login/login.component';
import { RegComponent } from './reg/reg.component';
import { TattComponent } from './tatt/tatt.component';
import { MasterComponent } from './master/master.component';
import { AdminRegisterationComponent } from './admin-registeration/admin-registeration.component'
import { ToastrModule } from 'ngx-toastr';
import{MatTooltipModule}from '@angular/material/tooltip';
import { ProfileComponent } from './profile/profile.component'

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    HomeComponent,
    BusesComponent,
    AddItemComponent,
    ProductComponent,
    SearchPipe,
    ProductdetailsComponent,
    LoginComponent,
    RegComponent,
    TattComponent,
    MasterComponent,
    AdminRegisterationComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCardModule,
    MatToolbarModule,
    MatSidenavModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    FormsModule,
    ReactiveFormsModule,
    MatRadioModule,
    HttpClientModule,
    MatListModule,
    MatSelectModule,
    MatDialogModule,
    ToastrModule.forRoot(),
    MatTooltipModule


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
