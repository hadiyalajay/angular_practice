import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { IEmployeetable } from 'src/app/core/interface/employee-table';

@Component({
  selector: 'app-employee-table',
  templateUrl: './employee-table.component.html',
  styleUrls: ['./employee-table.component.scss'],
})
export class EmployeeTableComponent {
  employeeArray: IEmployeetable[] = [];
  employeeListForm: FormGroup;

  constructor() {
    this.employeeListForm = new FormGroup({
      name: new FormControl(''),
      jobDescription: new FormControl(''),
    });
  }

  employeeList() {
    this.employeeArray.push(this.employeeListForm.value);
  }

  remove(indexNumber: number) {
    this.employeeArray.splice(indexNumber, 1);
  }
}
