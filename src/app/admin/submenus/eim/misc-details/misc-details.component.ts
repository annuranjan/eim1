import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormArray, Validators } from '@angular/forms';

@Component({
  selector: 'app-misc-details',
  templateUrl: './misc-details.component.html',
  styleUrls: ['./misc-details.component.css']
})
export class MiscDetailsComponent implements OnInit {

  miscForm: FormGroup;
  constructor() { }

  ngOnInit() {
    //Initialize the grid with the values already fed by the user.
    this.miscForm = new FormGroup({
      "salary": new FormControl(),
      "languages": new FormArray(
        [new FormControl(null, Validators.required)]
      ),
      "trainingDetails": new FormArray(
        [this.getATrainingDetailsGroup()]
      )
    });
  }

  getATrainingDetailsGroup() {
    return new FormGroup({
      'trainingName': new FormControl(null, Validators.required),
      'completionDate': new FormControl(null, Validators.required),
      'passingGrade': new FormControl(null, [Validators.required])
    });
  }

  onFormSubmit() {
    console.log(this.miscForm.value);
  }
  addALanguage() {
    (<FormArray>this.miscForm.get('languages')).push(new FormControl(null, Validators.required));
  }
  onDeleteLanguage(index: number) {
    (<FormArray>this.miscForm.get('languages')).removeAt(index)
  }
  addATraining() {
    (<FormArray>this.miscForm.get('trainingDetails')).push(this.getATrainingDetailsGroup());
  }
  onDeleteATraining(index: number) {
    (<FormArray>this.miscForm.get('trainingDetails')).removeAt(index);
  }
  deleteATraining(index: number) {
    (<FormArray>this.miscForm.get('trainingDetails')).removeAt(index);
  }
}
