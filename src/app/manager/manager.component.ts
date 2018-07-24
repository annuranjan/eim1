import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-manager',
  templateUrl: './manager.component.html',
  styleUrls: ['./manager.component.css']
})
export class ManagerComponent implements OnInit {
  // Manager
  // 1. Home
  // 2. Admin
  // 2. EIM =>{View Employee List, Access Own Profile}
  // 3. Time Registration
  // 4. ContactBook
  // 5. Reports (utility)
  managerNavbarMenu = ['Admin', 'EIM', 'Time Registration', 'ContactBook', 'Reports(utility)']

  constructor() { }

  ngOnInit() {
  }

}
