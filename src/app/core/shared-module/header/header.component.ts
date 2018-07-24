import { Component, OnInit, Input } from '@angular/core';
import { AppService } from '../../app.service';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from '../../auth.service';
import { NavbarMenus } from './navbar-menu';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  // @Input() navbarMenu: string[];
  navbarMenu: string[];
  userType;

  constructor(
    private authServ: AuthService,
    private appServ: AppService,
    private route: ActivatedRoute,
    private router: Router,
    private navMenus: NavbarMenus
  ) { }

  ngOnInit() {
    this.userType = this.authServ.getUserType();
    this.navbarMenu = this.navMenus[this.userType];
  }

  onHomeClick() {
    const url = this.userType + 'Home';
    this.router.navigate([url]);
  }

  onNavClick(menuItem: string) {
    this.appServ.sendNavMenuSub(menuItem);
    // const url = '/' + this.authServ.getUserType() + '/' + menuItem.replace(/\s+/g, '').toLowerCase();

    // const url = menuItem.replace(/\s+/g, '').toLowerCase();

    const urlMaker = this.userType + "Routes";
    const url = this.navMenus[urlMaker][menuItem];
    console.log(url);
    this.router.navigate([url], { relativeTo: this.route });
  }

  onLogout() {
    this.authServ.logout();
  }

}
