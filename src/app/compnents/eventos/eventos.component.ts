import { Component, OnInit } from '@angular/core';
import { EventosService } from '../../services/eventos.service';

@Component({
  selector: 'app-eventos',
  templateUrl: './eventos.component.html',
  styleUrls: ['./eventos.component.css']
})
export class EventosComponent implements OnInit {


  public eventos;

  constructor(
    private eventSrv: EventosService
  ) { }

  async ngOnInit() {

    this.eventos = await this.eventSrv.getAllEventos()
    console.log(this.eventos);
  }

}
