import { Component, OnInit, OnDestroy } from '@angular/core';
import { LoginService } from '../../services/login.service';
import { Subscription } from 'apollo-client/util/Observable';
import { UserWeb } from '../../../../models/UserWeb';
import { Router } from '@angular/router';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit {


  public usuario: UserWeb = {
    username: '',
    password: ''
  }

  public showMessage: boolean = false;



  constructor(
    private loginSrv: LoginService,
    private router: Router
  ) { }

  async ngOnInit() {




  }

  async btnIngresar() {
    const usuario = await this.loginSrv.login(this.usuario.username, this.usuario.password);

    if (usuario != null) {
      this.router.navigate(['dashboard'])
    } else {
      this.showMessage = true
    }


  }




}

//PARA GENERAR ESTE COMPONENT USE EL COMANDO
//ng g component modules/login/components/layout skipTests
