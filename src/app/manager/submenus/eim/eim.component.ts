import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-eim',
  templateUrl: './eim.component.html',
  styleUrls: ['./eim.component.css']
})
export class EimComponent implements OnInit {

  // submenu = [
  //   {
  //     title: "EIM Links",
  //     subMenu: ["View Employees", "Add Employee", "Edit Employee"]
  //   },
  //   {
  //     title: "Add more details",
  //     subMenu: ["Domain Name",
  //       "Languages", "Family Details", "Education Details", "Experience Details", "Training Details", "Nominee Details", "Salary Details"]
  //   },
  //   {
  //     title: "Update Profile",
  //     subMenu: ["Sub 1 List Item 3", "Sub 2 List Item 3", "Sub 3 List Item 3"]
  //   }
  // ];

  submenu = [
    {
      title: "Personal Details",
      subMenu: ["Personal Details", "Contact Details", "Emergency Contact", "Immigration Details", "Family Details"]
    },
    {
      title: "Professional Details",
      subMenu: ["Education", "Languages", "Training", "Experience", "Nominee Details", "Upload Your Image"]
    }
  ];
  constructor() { }

  ngOnInit() {
  }

}
