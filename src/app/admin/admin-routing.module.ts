import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AdminComponent } from "./admin.component";
import { EimComponent } from "./submenus/eim/eim.component";
import { AddEmployeeComponent } from "./submenus/eim/add-employee/add-employee.component";
import { ViewEmployeesComponent } from "./submenus/eim/view-employees/view-employees.component";
import { AdminProcessReportComponent } from "./submenus/reports/admin-process-report/admin-process-report.component";
import { ManagerProcessReportComponent } from "./submenus/reports/manager-process-report/manager-process-report.component";
import { EmployeeProcessReportComponent } from "./submenus/reports/employee-process-report/employee-process-report.component";
import { ReportsComponent } from "./submenus/reports/reports.component";
import { MiscDetailsComponent } from "./submenus/eim/misc-details/misc-details.component";
import { NotFoundComponent } from "../core/not-found/not-found.component";
import { NomineeDetailsComponent } from "./submenus/eim/nominee-details/nominee-details.component";
import { FamEduExpComponent } from "./submenus/eim/fam-edu-exp/fam-edu-exp.component";
import { CreateReportComponent } from "../core/shared-module/create-report/create-report.component";
import { PersonalDetailsComponent } from "./submenus/eim/personal-details/personal-details.component";
import { EditEmployeeComponent } from "./submenus/eim/edit-employee/edit-employee.component";

const adminRoutes: Routes = [
    {
        path: "admin", component: AdminComponent, children: [
            { path: "", redirectTo: "admin-admin", pathMatch: "full" },
            { path: "admin-admin", component: EimComponent },
            {
                path: "eim", component: EimComponent, children: [
                    { path: "addEmployee", component: AddEmployeeComponent },
                    { path: "viewEmployees", component: ViewEmployeesComponent },
                    { path: "editEmployee", component: EditEmployeeComponent },
                    { path: "personalDetails", component: PersonalDetailsComponent },
                    { path: "languages", component: MiscDetailsComponent },
                    { path: "trainingDetails", component: MiscDetailsComponent },
                    { path: "salaryDetails", component: MiscDetailsComponent },
                    { path: "familyDetails", component: FamEduExpComponent },
                    { path: "educationDetails", component: FamEduExpComponent },
                    { path: "experienceDetails", component: FamEduExpComponent },
                    { path: "nomineeDetails", component: NomineeDetailsComponent }
                ]
            },
            {
                path: "reports", component: ReportsComponent, children: [
                    { path: "createReport", component: CreateReportComponent },
                    { path: "adminProcessReport", component: AdminProcessReportComponent },
                    { path: "managerProcessReport", component: ManagerProcessReportComponent },
                    { path: "employeeProcessReport", component: EmployeeProcessReportComponent },
                ]
            },
            { path: "leave", component: EimComponent },
            { path: "trackEmployee", component: EimComponent },
            { path: "contactBook", component: EimComponent }
        ]
    }

];

@NgModule({
    imports: [RouterModule.forChild(adminRoutes)],
    exports: [RouterModule]
})

export class AdminRoutingModule { }
