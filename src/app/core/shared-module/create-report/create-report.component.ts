import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { SelectItem } from 'primeng/api';

@Component({
  selector: 'app-create-report',
  templateUrl: './create-report.component.html',
  styleUrls: ['./create-report.component.css']
})
export class CreateReportComponent implements OnInit {

  reportForm: FormGroup;
  reportType: SelectItem[] = [
    { label: "Report Type", value: null },
    { label: "Process Report", value: "Process Report" },
    { label: "Client Report", value: "Client Report" },
    { label: "Other Report", value: "Other Report" }
  ];
  constructor() { }


  ngOnInit() {
    this.reportForm = new FormGroup({
      'reportTitle': new FormControl(null, Validators.required),
      'reportType': new FormControl(null, Validators.required),
      'reportBody': new FormControl(null, Validators.required)
    });
  }

  onFormSubmit() {
    console.log(this.reportForm.value);
  }

}
