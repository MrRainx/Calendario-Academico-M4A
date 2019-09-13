import { Component, OnInit } from '@angular/core';
import { LoginService } from './modules/login/services/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  public showNav = true;

  constructor(
    private loginSrv: LoginService,
    private router: Router
  ) {

  }

  ngOnInit() {

    if (this.loginSrv.getCurrentUser() == null) {
      this.router.navigate(['login'])
    }


  }

}
