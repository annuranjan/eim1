import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from '../../../../../node_modules/rxjs';
import { AppService } from '../../app.service';
import { AuthService } from '../../auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit, OnDestroy {
  userType;
  dispSidebar;
  menuRequestSubs: Subscription;

  constructor(
    private appServ: AppService,
    private authServ: AuthService
  ) { }

  ngOnInit() {
    this.userType = this.authServ.getUserType();
    this.menuRequestSubs = this.appServ.getNavMenuSub().subscribe((menuTitle) => {
      this.dispSidebar = menuTitle;
    })
  }

  ngOnDestroy() {
    this.menuRequestSubs.unsubscribe();
  }
}
