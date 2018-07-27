import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-personal-details',
  templateUrl: './personal-details.component.html',
  styleUrls: ['./personal-details.component.css']
})
export class PersonalDetailsComponent implements OnInit {

  pdForm: FormGroup;
  constructor() { }

  ngOnInit() { 
    
  }

}

// pd_employeeCode: 
// pd_dob: 
// pd_gender:
// pd_nationality: 
// pd_bloodgroup: {
// pd_maritalStatus: 
// pd_category: 
// pd_religion: 