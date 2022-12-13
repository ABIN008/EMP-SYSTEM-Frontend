import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './admin-part/register/register.component';
import { AdminPartComponent } from './admin-part/admin-part.component';
const routes: Routes = [
  {path:'', component : LoginComponent},
  {path:'admin',component : AdminPartComponent},
  {path:'register',component:RegisterComponent},
  {path: 'logout',component:LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
