import { Component, OnInit, Input } from '@angular/core';
import { Fact } from 'src/app/shared/models/models';

@Component({
  selector: 'app-facts',
  templateUrl: './facts.component.html',
  styleUrls: ['./facts.component.scss']
})
export class FactsComponent implements OnInit {

  @Input() facts: Fact[];
  @Input() precioACtivo: string;

  constructor() { }

  ngOnInit() {
  }

}
