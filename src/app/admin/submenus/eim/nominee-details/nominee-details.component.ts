import { Component, OnInit } from '@angular/core';
import { FormArray, FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-nominee-details',
  templateUrl: './nominee-details.component.html',
  styleUrls: ['./nominee-details.component.css']
})
export class NomineeDetailsComponent implements OnInit {

  nomForm;
  constructor() { }

  ngOnInit() {
    this.nomForm = new FormGroup({
      'nomineeArray': new FormArray(
        [this.getAFormControl()]
      )
    });
  }

  addANominee() {
    (<FormArray>this.nomForm.get('nomineeArray')).push(this.getAFormControl());
  }

  getAFormControl() {
    return new FormGroup({
      'nomineeName': new FormControl(null, Validators.required),
      'relation': new FormControl(null, Validators.required),
      'contactNum': new FormControl(null, Validators.required)
    });
  }

  deleteANominee(index: number) {
    (<FormArray>this.nomForm.get('nomineeArray')).removeAt(index);
  }

  onFormSubmit() {
    console.log(this.nomForm.value);
  }
}
