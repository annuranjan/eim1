import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {

  addEmpForm: FormGroup;
  constructor() { }

  ngOnInit() {
    this.addEmpForm = new FormGroup({
      'firstName': new FormControl(null, Validators.required),
      'middleName': new FormControl(null, Validators.required),
      'lastName': new FormControl(null, Validators.required),
      'email': new FormControl(null, Validators.required),
      'domainName': new FormControl(null, Validators.required),
    });
  }


}
