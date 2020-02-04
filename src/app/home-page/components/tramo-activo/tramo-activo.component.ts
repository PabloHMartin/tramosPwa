import { Component, OnInit, Input } from '@angular/core';
import { Tramo } from 'src/app/shared/models/models';

@Component({
  selector: 'app-tramo-activo',
  templateUrl: './tramo-activo.component.html',
  styleUrls: ['./tramo-activo.component.scss']
})
export class TramoActivoComponent implements OnInit {

  @Input() tramoActivo: Tramo;
  @Input() isHandset: boolean;

  constructor() { }

  ngOnInit() {
  }

}
