import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';

import { SelectItem } from 'primeng/api';

@Component({
  selector: 'app-fam-edu-exp',
  templateUrl: './fam-edu-exp.component.html',
  styleUrls: ['./fam-edu-exp.component.css']
})
export class FamEduExpComponent implements OnInit {

  passingYear: SelectItem[];
  famEduExp;
  constructor() { }

  ngOnInit() {
    this.passingYear = [{ label: 'Year', value: null }, { label: '2017', value: 2017 }, { label: '2016', value: 2016 }, { label: '2015', value: 2015 }, { label: '2014', value: 2014 }, { label: '2013', value: 2013 }, { label: '2012', value: 2012 }, { label: '2011', value: 2011 }, { label: '2010', value: 2010 }, { label: '2009', value: 2009 }, { label: '2008', value: 2008 }, { label: '2007', value: 2007 }, { label: '2006', value: 2006 }/*2015, 2014, 2013, 2012, 2011, 2010, 2009, 2008, 2007, 2006, 2005, 2004, 2003, 2002, 2001, 2000*/];
    this.famEduExp = new FormGroup({
      "famArray": new FormArray([this.getAFamGroup()]),
      "eduArray": new FormArray([this.getAEduGroup()]),
      "expArray": new FormArray([this.getAExpGroup()])
    });
  }

  getAFamGroup() {
    return new FormGroup({
      'name': new FormControl(null, Validators.required),
      'relation': new FormControl(null, Validators.required),
      'age': new FormControl(null)
    })
  }

  getAEduGroup() {
    return new FormGroup({
      'examName': new FormControl(null, Validators.required),
      'schoolName': new FormControl(null, Validators.required),
      'passingYear': new FormControl(null, Validators.required),
      'passingGrade': new FormControl(null, Validators.required)
    });
  }

  getAExpGroup() {
    return new FormGroup({
      'companyName': new FormControl(null, Validators.required),
      'designation': new FormControl(null, Validators.required),
      'joiningDate': new FormControl(null, Validators.required),
      'leavingDate': new FormControl(null, Validators.required)
    });
  }

  addAFamilyMember() {
    (<FormArray>this.famEduExp.get('famArray')).push(this.getAFamGroup());
  }

  deleteAFamilyMember(index: number) {
    (<FormArray>this.famEduExp.get('famArray')).removeAt(index);
  }

  addAnExp() {
    (<FormArray>this.famEduExp.get('expArray')).push(this.getAExpGroup());
  }

  deleteAnExp(index: number) {
    (<FormArray>this.famEduExp.get('expArray')).removeAt(index);
  }

  addAnEdu() {
    (<FormArray>this.famEduExp.get('eduArray')).push(this.getAEduGroup());
  }

  deleteAnEdu(index: number) {
    (<FormArray>this.famEduExp.get('eduArray')).removeAt(index);
  }

  onFormSubmit() {
    console.log(this.famEduExp.value);
  }
}

