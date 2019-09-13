import { Component, OnInit, Host } from '@angular/core';
import { LoginService } from '../../modules/login/services/login.service';
import { AppComponent } from 'src/app/app.component';
import { UserWeb } from '../../models/UserWeb';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  public user: UserWeb

  constructor(
    @Host() public app: AppComponent,
    private loginSrv: LoginService
  ) { }

  ngOnInit() {
    this.user = this.loginSrv.getCurrentUser()
  }

}
