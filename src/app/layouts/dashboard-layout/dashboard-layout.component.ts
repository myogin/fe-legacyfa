import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NbAuthService, NbTokenService } from '@nebular/auth';
import { faHome } from '@fortawesome/free-solid-svg-icons';
// import { faHouseUser } from '@fortawesome/free-regular-svg-icons';
@Component({
  selector: 'app-dashboard-layout',
  templateUrl: './dashboard-layout.component.html',
  styleUrls: ['./dashboard-layout.component.scss'],
})
export class DashboardLayoutComponent implements OnInit {
  setting: boolean = false;
  userRole: string | any = '';
  faHome = faHome;

  constructor(
    private nbTokenService: NbTokenService,
    private router: Router,
    private authService: NbAuthService
  ) {}

  ngOnInit(): void {}

  settingOpen() {
    this.setting = !this.setting;
  }

  logout(): void {
    // console.log('logout');
    // this.nbTokenService.clear().subscribe((res) => {
    //   this.router.navigate(['/auth']);
    // });
    this.authService.logout('email');
  }
}
