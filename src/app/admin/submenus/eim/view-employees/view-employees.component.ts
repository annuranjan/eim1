import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MatDialog, MatDialogRef } from '@angular/material';
import { ConfirmationDialogComponent } from '../../../../core/util/confirmation-dialog/confirmation-dialog.component';


@Component({
  selector: 'app-view-employees',
  templateUrl: './view-employees.component.html',
  styleUrls: ['./view-employees.component.css']
})
export class ViewEmployeesComponent implements OnInit {

  employees;
  dialogRef: MatDialogRef<ConfirmationDialogComponent>
  constructor(
    public dialog: MatDialog,
    private http: HttpClient
  ) { }

  ngOnInit() {
    this.http.get("http://localhost:1122/employees").subscribe((employees) => {
      this.employees = employees;
      console.log(this.employees);
    })
  }

  openConfirmationDialog() {
    this.dialogRef = this.dialog.open(ConfirmationDialogComponent, { disableClose: false });
    this.dialogRef.componentInstance.confirmMessage = "Are you sure you want to delete employee";
    this.dialogRef.afterClosed().subscribe(result => {
      if (result) {
        console.log("dialog closed")
      }
      this.dialogRef = null;
    });
  }

  deleteEmployee(empCode: number) {
    let url = "http://localhost:1122/employees/" + empCode + "/delete";
    const emp = {
      // "employeeCode": empCode,
      // "currentEmp": false
    }
    this.http.put(url, emp).subscribe((resp) => {
      console.log(resp);
      this.http.get("http://localhost:1122/employees").subscribe((employees) => {
        this.employees = employees;
      })
    });
  }

}
