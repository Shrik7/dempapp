import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { config } from 'rxjs/internal/config';
import { Employee } from '../Models/employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  apiUrl="https://localhost:5001/api/Employee/post";
  
  constructor(private httpClient:HttpClient) { }

  createUser(employee: Employee) {
    return this.httpClient.post(`${this.apiUrl}`,employee);
    
  }
}
