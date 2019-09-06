import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit {

  public username: string;
  public password: string;

  constructor() { }

  ngOnInit() {
  }


}

//PARA GENERAR ESTE COMPONENT USE EL COMANDO
//ng g component modules/login/components/layout skipTests
