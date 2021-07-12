import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Department } from '../Models/department';
import { map } from 'rxjs/operators';
import { Designation } from '../Models/designation';
import { HttpHeaders } from '@angular/common/http';
import { EmployeeService } from './employee.service';
import { Employee } from '../Models/employee';

@Injectable({
  providedIn: 'root'
})
export class DepartmentService {

  private departmentUrl = 'https://localhost:5001/api/employee/get';
  private designationUrl = 'https://localhost:5001/api/employee/geybydeptid';
  //employee: Employee[];
  employee: Employee = new Employee;

  
  constructor(private httpClient: HttpClient, private employeeService:EmployeeService) {
   }

  getDepartments(): Observable<Department[]> {
    return this.httpClient.get<Department[]>(`${this.departmentUrl}`
    );

    // return this.httpClient.get<GetResponseDepartments>(this.departmentUrl).pipe(
    //   map(response => response.department)
    //);
  }

  getDesignations(theDepartmentId: number): Observable<Designation[]> {

    // search url
    const searchDesignationUrl = `${this.designationUrl}?id=${theDepartmentId}`;

    return this.httpClient.get<GetResponseDesignations>(searchDesignationUrl).pipe(
      map(response => response.designation)
    );
  }

  // public save(user: Department) {
  //   return this.httpClient.post<Department>(this.departmentUrl, user);
  // }

  
}

// interface GetResponseDepartments {
//     department: Department[];
// }

interface GetResponseDesignations {
    designation: Designation[];
}