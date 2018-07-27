import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { RemoteRequestBuilderService } from '../../../../core/remoteRequestBuilder.service';

@Component({
  selector: 'app-edit-employee',
  templateUrl: './edit-employee.component.html',
  styleUrls: ['./edit-employee.component.css']
})
export class EditEmployeeComponent implements OnInit {

  id;
  employee;
  viewEditEmpForm: FormGroup;
  submittedSuccessfully;

  constructor(
    private activatedRoute: ActivatedRoute,
    private http: HttpClient,
    private reqBuilder: RemoteRequestBuilderService
  ) { }


  ngOnInit() {

    this.viewEditEmpForm = new FormGroup({
      "employeeCode": new FormControl(null, Validators.required),
      'firstname': new FormControl(null, Validators.required),
      'middlename': new FormControl(null),
      'lastname': new FormControl(null, Validators.required),
      'email': new FormControl(null, Validators.required),
      'domainname': new FormControl(null, Validators.required),
      'regDate': new FormControl(null, Validators.required),
    });

    this.activatedRoute.queryParams.subscribe((params) => {
      this.id = params['id'];
      console.log(this.id);
    });

    this.reqBuilder.fetchAnEmp(this.id).subscribe(
      (emp) => {
        this.employee = emp;
        console.log("Employee fetched is: ");
        console.log(this.employee);
        this.viewEditEmpForm.setValue({
          "employeeCode": this.employee.employeeCode,
          'firstname': this.employee.firstname,
          'middlename': this.employee.middlename,
          'lastname': this.employee.lastname,
          'email': this.employee.email,
          'domainname': this.employee.domainname,
          'regDate': this.employee.regDate,
        });
      },
      (err) => { console.log(err); }
    );
  }

  onSubmit() {
    const updatedEmployee = {
      // _id: this.employee._id,
      // employeeCode: this.viewEditEmpForm.value.employeeCode,
      firstname: this.viewEditEmpForm.value.firstname,
      middlename: this.viewEditEmpForm.value.middlename,
      lastname: this.viewEditEmpForm.value.lastname,
      domainname: this.viewEditEmpForm.value.domainname,
      email: this.viewEditEmpForm.value.email,
      // regDate: this.viewEditEmpForm.value.regDate,
    }

    this.reqBuilder.updateAnEmp(this.employee.employeeCode, updatedEmployee).subscribe(() => {
      this.submittedSuccessfully = true;
    });
  }

}
