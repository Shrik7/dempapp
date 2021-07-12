import { Component, OnInit } from '@angular/core';
import { EmployeeServiceService } from '../employee-service.service';
import {Employee} from '../model/employee';
import * as moment from 'moment'

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  

    employees: Employee[] = [];
  
    constructor(private employeeService: EmployeeServiceService) {
    }
  
    ngOnInit() {
      this.employeeService.findAll().subscribe(data => {
        this.employees = data;

        
      });
      
    }
  }

