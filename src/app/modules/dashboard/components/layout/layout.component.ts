import { Component, OnInit, Host } from "@angular/core";
import { LoginService } from "../../../login/services/login.service";
import { UserWeb } from "../../../../models/UserWeb";
import { Router } from "@angular/router";
import { AppComponent } from "src/app/app.component";

@Component({
  selector: "app-dashboard",
  templateUrl: "./layout.component.html"
})
export class LayoutComponent implements OnInit {
  public user: UserWeb;

  constructor(
    private loginSrv: LoginService,
    private router: Router,
    @Host() private app: AppComponent
  ) {}

  async ngOnInit() {
    this.user = this.loginSrv.getCurrentUser();
    this.app.showNav = true;
    console.log(this.user);
  }

  btnCerrarSesion() {
    this.loginSrv.LOGOUT();
    this.router.navigate(["login"]);
  }
  btnCalendario() {
    this.router.navigate(["calendario"]);
  }
}

//ng g component modules/dashboard/components/layout --spec=false
