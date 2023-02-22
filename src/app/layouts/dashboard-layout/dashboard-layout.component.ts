import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NbAuthService, NbTokenService } from '@nebular/auth';

@Component({
  selector: 'app-dashboard-layout',
  templateUrl: './dashboard-layout.component.html',
  styleUrls: ['./dashboard-layout.component.scss'],
})
export class DashboardLayoutComponent implements OnInit {
  setting: boolean = false;
  userRole: string | any = '';
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
