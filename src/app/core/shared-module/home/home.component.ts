import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from '../../../../../node_modules/rxjs';
import { AppService } from '../../app.service';
import { AuthService } from '../../auth.service';
import { NavbarMenus } from '../header/navbar-menu';
import { Router, ActivatedRoute } from '../../../../../node_modules/@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit, OnDestroy {
  private userType: string;
  public dispSideBar: any = undefined;
  private menuRequestSubs: Subscription;
  public get sideBarVisibility() {

    return this.dispSideBar;
  }
  constructor(
    private appServ: AppService,
    private authServ: AuthService,
    private navMenus: NavbarMenus,
    private router: Router,
    private route: ActivatedRoute
  ) {
    // debugger;
    // this;
  }

  ngOnInit() {
    // debugger;
    this.userType = this.authServ.getUserType();
    //this.dispSideBar=undefined;
    this.menuRequestSubs = this.appServ.getNavMenuSub().subscribe((menuTitle) => {
      // debugger;
      this.dispSideBar = menuTitle;
      this.navgiateOnClick(menuTitle);
    })
  }

  navgiateOnClick(menuTitle: string) {
    const urlMaker = this.userType + "Routes";
    const url = this.navMenus[urlMaker][menuTitle];
    console.log(url);
    // debugger;
    this.router.navigate([url], { relativeTo: this.route });
  }

  ngOnDestroy() {
    this.menuRequestSubs.unsubscribe();
  }
}
