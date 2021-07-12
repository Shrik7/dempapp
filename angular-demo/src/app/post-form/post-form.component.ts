import { Component, OnInit } from '@angular/core';
import { Department } from '../Models/department';
import { Designation } from '../Models/designation';
import { Employee } from '../Models/employee';
import { DepartmentService } from '../service/department.service';
import { EmployeeService } from '../service/employee.service';

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.css']
})
export class PostFormComponent implements OnInit {

  //departments=['Admin','Finance','IT'];
  departments: Department[] = [];
  //designations=['Associate', 'Executive' , 'Manager'];
  designations:Designation[]=[];

  employee: Employee = new Employee;


  startDate = new Date(2000, 0, 2);
  constructor(private departmentService:DepartmentService, private employeeService:EmployeeService) { 
    //this.departments=new Department();
  }

  

  ngOnInit(): void {
    this.employee = { 
      FirstName:"",
      LastName:"",
      Age: null,
      DateOfJoining:"",
      Department:"",
      DepartmentId: null,
      Designation:"",
      DesignationId: null
    };

    // this.departmentService.getDepartments().subscribe(
    //   data => {
    //     console.log("Retrieved departments: " + JSON.stringify(data));
    //     this.departments = data;
    //     console.log(this.departments);
    //   }
    // );

    this.departments = [
      {
        departmentId: 1,
        departmentCode: 1,
        departmentName: "Admin",
        designation: null
      },
      {
        departmentId: 2,
        departmentCode: 2,
        departmentName: "IT",
        designation: null
      },
      {
        departmentId: 3,
        departmentCode: 3,
        departmentName: "Finance",
        designation: null
      }
    ];
    this.designations = [
      {
        designationId:1,
        designationName:"Manager",
        departmentId:1
      },
      {
        designationId:2,
        designationName:"Team Lead",
        departmentId:2
      },
      {
        designationId:3,
        designationName:"Analyst",
        departmentId:3
      }
    ]
    
  }

  getDepartment(){
    this.departmentService.getDepartments().subscribe(data => {
      this.departments = data;
    });
  }

  onChange() {
    this.departments.forEach(department => {
      if(department.departmentName === this.employee.Department) {
        this.employee.DepartmentId = department.departmentId;
      }
    });
    this.designations.forEach(designation => {
      if(this.employee.DepartmentId === designation.departmentId) {
        this.employee.Designation = designation.designationName;
        this.employee.DesignationId = designation.designationId;
      }
    });
  }

  onSubmit() {
    console.log(this.employee);
    console.log(this.employee);
    this.saveUser();
  }


  saveUser() {
    //this.employee.DepartmentId=this.departments.filter(value=>value['departmentName']===this.employee.Department)[0].DepartmentId;
    //delete this.employee.Department;
    let requestData = this.employee;
    delete requestData.Department;
    delete requestData.Designation;
    this.employeeService.createUser(requestData).subscribe(data => {
      console.log(data);
      alert("User added successfully");
    },
      error => console.log(error));
  }
  // onSubmit(userForm) {
  //   console.log(userForm.value);
  // }
  // onSubmit(userForm) {
  //   this.departmentService.saveUser(this.departments).subscribe(result => this.getDepartment());
  // }

  // gotoUserList() {
  //   //this.router.navigate(['/users']);
  // }

  // onSubmit() {
  //   if (this.userForm.valid) {
  //     console.log("Form Submitted!");
  //     this.form.reset();
  //   }
  // }
  

}
