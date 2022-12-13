import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminPartComponent } from './admin-part/admin-part.component';
import { EmployeePartComponent } from './employee-part/employee-part.component';
import { AdminHeaderComponent } from './admin-part/admin-header/admin-header.component';
import { AddEditComponent } from './admin-part/add-edit/add-edit.component';
import { ListEmpComponent } from './admin-part/list-emp/list-emp.component';
import { ViewEmpComponent } from './admin-part/view-emp/view-emp.component';
import { RegisterComponent } from './admin-part/register/register.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';



@NgModule({
  declarations: [
    AppComponent,
    AdminPartComponent,
    EmployeePartComponent,
    AdminHeaderComponent,
    AddEditComponent,
    ListEmpComponent,
    ViewEmpComponent,
    RegisterComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
