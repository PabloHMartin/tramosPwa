import { DbService } from 'src/app/shared/services/db.service';
import { Component, OnInit, Input } from '@angular/core';
import { map, filter } from 'rxjs/operators';

@Component({
  selector: 'app-tramo-subs',
  templateUrl: './tramo-subs.component.html',
  styleUrls: ['./tramo-subs.component.scss']
})
export class TramoSubsComponent implements OnInit {

  @Input() precio: string;
  @Input() horaInicio: any;
  @Input() horaFin: any;
  @Input() isHandset: boolean;
  @Input() inhabil: boolean;

  constructor() { }

  ngOnInit() {
  }

}
