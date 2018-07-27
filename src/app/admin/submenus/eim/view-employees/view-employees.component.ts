import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MatDialog, MatDialogRef } from '@angular/material';
import { ConfirmationDialogComponent } from '../../../../core/util/confirmation-dialog/confirmation-dialog.component';
import { RemoteRequestBuilderService } from '../../../../core/remoteRequestBuilder.service';


@Component({
  selector: 'app-view-employees',
  templateUrl: './view-employees.component.html',
  styleUrls: ['./view-employees.component.css']
})
export class ViewEmployeesComponent implements OnInit {

  employees;
  dialogRef: MatDialogRef<ConfirmationDialogComponent>;
  constructor(
    public dialog: MatDialog,
    private http: HttpClient,
    private reqBuilder: RemoteRequestBuilderService
  ) { }

  ngOnInit() {
    this.reqBuilder.getAllEmp().subscribe((employees) => {
      this.employees = employees;
      console.log(this.employees);
    })
  }

  openConfirmationDialog(empCode: number, empName: string) {
    this.dialogRef = this.dialog.open(ConfirmationDialogComponent, { disableClose: false });
    this.dialogRef.componentInstance.confirmMessage = "Are you sure you want to delete \"" + empName + "\" with Emp Code: " + empCode;
    this.dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.deleteEmployee(empCode);
      }
      this.dialogRef = null;
    });
  }

  deleteEmployee(empCode: number) {

    this.reqBuilder.removeAnEmp(empCode).subscribe((resp) => {
      console.log(resp);
      //  BETTER IDEA - Push out the given employee in the array instead of sending a new request.
      this.reqBuilder.getAllEmp().subscribe((employees) => {
        this.employees = employees;
      });
    });
  }

}
