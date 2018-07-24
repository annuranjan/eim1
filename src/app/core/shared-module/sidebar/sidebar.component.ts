import { Component, OnInit, Input } from '@angular/core';
import { AppService } from '../../app.service';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from '../../auth.service';
import { SidebarMenus } from './sidebar-menu';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  // @Input() submenu;

  @Input() submenuRequested;
  submenu;
  constructor(
    private authServ: AuthService,
    private appServ: AppService,
    private router: Router,
    private route: ActivatedRoute,
    private sidebarmenu: SidebarMenus
  ) { }

  ngOnInit() {
    const userType = this.authServ.getUserType();
    this.submenu = this.sidebarmenu[userType][this.submenuRequested.toLowerCase()];
    // switch (userType) {
    //   case ("admin"): {
    //     this.submenu = this.sidebarmenu.admin[]
    //     break;
    //   }
    //   case ("manager"): { 
    //     break; }
    //   case ("manager"): { 
    //     break; }
    // }
  }

  onSubMenuItemClick(submenuItem: string, submenuItemTitle: string) {
    let url;

    // this.appServ.sendSubMenuSub(submenuItem);


    //APPROACH 1: Converting the menu item click to the url directly.

    /*
    ** Ways to convert a space separated string into 1 continious string. 
    ** const url = '/' + this.authServ.getUserType() + '/' + menuItem.replace(/\s+/g, '').toLowerCase();
    ** const url = submenuItem.replace(/\s+/g, '').toLowerCase();
    */
    // var toCamelCase = function (str) {
    //   return str.toLowerCase()
    //     .replace(/['"]/g, '')
    //     .replace(/\W+/g, ' ')
    //     .replace(/ (.)/g, ($1) => { return $1.toUpperCase(); })
    //     .replace(/ /g, '');
    // }

    // const url = toCamelCase(subMenuItem);
    // console.log("url: " + url);


    //APPROACH 2: Getting the url based on the item clicked and mapping it to the corresponding route. 
    // switch (this.authServ.getUserType()) {

    //   case ("admin"): {
    //     url = this.appServ.adminRoutes[submenuItemTitle][submenuItem];
    //     break;
    //   }

    //   case ("manager"): {
    //     url = this.appServ.managerRoutes[submenuItemTitle][submenuItem];
    //     break;
    //   }

    //   case ("employee"): {
    //     url = this.appServ.employeeRoutes[submenuItemTitle][submenuItem];
    //     break;
    //   }
    // }


    let urlUserType = this.authServ.getUserType() + "Routes";
    url = this.sidebarmenu[urlUserType][submenuItemTitle][submenuItem];

    this.router.navigate([url], { relativeTo: this.route });
  }
}
