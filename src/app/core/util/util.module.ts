import { NgModule } from "@angular/core";
import { ConfirmationDialogComponent } from "./confirmation-dialog/confirmation-dialog.component";
import { MatDialogModule } from "@angular/material";


@NgModule({
    imports: [MatDialogModule],
    declarations: [ConfirmationDialogComponent],
    exports: [ConfirmationDialogComponent]
})
export class UtilModule { }