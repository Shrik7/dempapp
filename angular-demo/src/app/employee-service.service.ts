import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Employee } from './model/employee';

@Injectable({
  providedIn: 'root'
})


export class EmployeeServiceService {


  private employeeUrl: string;


  constructor(private http: HttpClient) {
    
    this.employeeUrl = 'http://localhost:8080/users';
    
  }

  public findAll(): Observable<Employee[]> {
    // const headerSettings={
    //   'Access-Control-Allow-Origin','*'
    // }
    // let requestHeaders={
    //   headers: new Headers(headerSettings)
    // };
    // return this.http.get<Employee[]>(this.employeeUrl, requestHeaders);
    let headers = new Headers();
    headers.append('Access-Control-Allow-Origin', '*');
    return this.http.get<Employee[]>(this.employeeUrl);
    {headers:headers}
  }

  public save(user: Employee) {
    return this.http.post<Employee>(this.employeeUrl, user);
  }
}
