import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { RemoteRequestBuilderService } from '../../../../core/remoteRequestBuilder.service';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {

  submittedSuccessfully;
  addEmpForm: FormGroup;
  constructor(
    private http: HttpClient,
    private reqBuilder: RemoteRequestBuilderService
  ) { }

  ngOnInit() {
    this.addEmpForm = new FormGroup({
      'firstname': new FormControl(null, Validators.required),
      'middlename': new FormControl(null),
      'lastname': new FormControl(null, Validators.required),
      'email': new FormControl(null, Validators.required),
      'domainname': new FormControl(null, Validators.required),
    });
  }

  onSubmit() {
    console.log(this.addEmpForm.value);

    const emp = {
      firstname: this.addEmpForm.value.firstname,
      middlename: this.addEmpForm.value.middlename,
      lastname: this.addEmpForm.value.lastname,
      email: this.addEmpForm.value.email,
      domainname: this.addEmpForm.value.domainname,
    };
    this.reqBuilder.addAnEmp(emp).subscribe((emp) => {
      this.submittedSuccessfully = true;
    },
      (error) => { console.log(error); });
  }
}

