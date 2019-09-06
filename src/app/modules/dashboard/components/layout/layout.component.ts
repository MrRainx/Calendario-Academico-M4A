import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../../login/services/login.service';
import { UserWeb } from '../../../../models/UserWeb';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit {

  public user: UserWeb;

  constructor(

    private loginSrv: LoginService,
    private router: Router
  ) { }

  async ngOnInit() {
    this.user = this.loginSrv.getCurrentUser()

    console.log(this.user);

  }

  btnCerrarSesion() {
    this.loginSrv.LOGOUT()
    this.router.navigate(['login'])
  }

}

//ng g component modules/dashboard/components/layout --spec=false
