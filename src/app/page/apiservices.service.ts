import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiservicesService {

  constructor(private http:HttpClient) { }

  apiurl="https://api.npoint.io/3646918b89739d2df21b";
  
    homeapi():Observable<any>{
      return this.http.get(`${this.apiurl}`);
    }
  

}
