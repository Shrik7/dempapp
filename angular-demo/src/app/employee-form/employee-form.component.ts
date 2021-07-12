import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeeServiceService } from '../employee-service.service';
import { Employee } from '../model/employee';
import * as moment from 'moment'

@Component({
  selector: 'app-employee-form',
  templateUrl: './employee-form.component.html',
  styleUrls: ['./employee-form.component.css']
})
export class EmployeeFormComponent {

  employee: Employee | undefined;
  

  constructor(
    private route: ActivatedRoute, 
      private router: Router, 
        private employeeService: EmployeeServiceService) {
     this.employee = new Employee();
     
  }

  
  onSubmit() {
    this.employeeService.save(this.employee).subscribe(result => this.gotoUserList());
  }

  gotoUserList() {
    this.router.navigate(['/users']);
  }
}