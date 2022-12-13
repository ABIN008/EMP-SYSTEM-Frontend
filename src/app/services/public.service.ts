import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PublicService {
  api_url = 'http://localhost:8000/';
  readonly PhotoUrl = "http://127.0.0.1:8000/adminuser/media/";

  constructor(private http:HttpClient) { }

  getMessage(){
    return this.http.get(this.api_url);
  }

  getEmpList():Observable<any[]>{
    return this.http.get<any[]>(this.api_url + 'adminuser/employee/');
  }

  addEmployee(val:any){
    return this.http.post(this.api_url + 'adminuser/employee/',val);
  }

  updateEmployee(val:any){
    return this.http.put(this.api_url + 'adminuser/employee/',val);
  }

  deleteEmployee(val:any){
    return this.http.delete(this.api_url + 'adminuser/employee/'+val);
  }

  getleaveList():Observable<any[]>{
    return this.http.get<any[]>(this.api_url + 'employee/empleave/');
  }

  addleave(val:any){
    return this.http.post(this.api_url + 'employee/empleave/',val);
  }

  updateleave(val:any){
    return this.http.put(this.api_url + 'employee/empleave/',val);
  }

  deleteleave(val:any){
    return this.http.delete(this.api_url + 'employee/empleave/'+val);
  }

  UploadPhoto(val:any){
    return this.http.post(this.api_url+'adminuser/SaveFile',val);
  }





}
