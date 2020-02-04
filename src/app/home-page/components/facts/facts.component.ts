import { Component, OnInit, Input } from '@angular/core';
import { Fact } from 'src/app/shared/models/models';
import { SwiperConfigInterface } from 'ngx-swiper-wrapper';


@Component({
  selector: 'app-facts',
  templateUrl: './facts.component.html',
  styleUrls: ['./facts.component.scss']
})
export class FactsComponent implements OnInit {

  @Input() facts: Fact[];
  @Input() precioACtivo: string;

  config: SwiperConfigInterface = {
    speed: 300,
    spaceBetween: 15,
    slidesPerView: 2,
    centeredSlides: true
  };

  constructor() { }

  ngOnInit() {
  }
}

