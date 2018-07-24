import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.css']
})
export class ReportsComponent implements OnInit {

  submenu = [
    {
      title: "View Admin Reports",
      subMenu: ["Process Reports", "Client Brief Report", "Some XYZ Reports"]
    },
    {
      title: "View Manager Reports",
      subMenu: ["Process Reports", "Client Brief Report", "Some XYZ Reports"]
    },
    {
      title: "View Employee Reports",
      subMenu: ["Process Reports", "Client Brief Report", "Some XYZ Reports"]
    },
    {
      title: "Create Reports",
      subMenu: ["Process Report", "Client Brief Report", "Some XYZ Report"]
    }
  ];
  constructor() { }

  ngOnInit() {
  }

}
