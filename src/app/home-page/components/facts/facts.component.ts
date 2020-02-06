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
  @Input() isHandset: boolean;

  config: SwiperConfigInterface = {
    speed: 300,
    spaceBetween: 15,
    slidesPerView: 2,
    centeredSlides: true
  };


  desktopConfig: SwiperConfigInterface = {
    speed: 300,
    spaceBetween: 15,
    slidesPerView: 3,
    slidesPerColumn: 2,
    autoplay: {
      delay: 5000,
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  };

  constructor() { }


  calculoPrecio(potencia: number, precioACtivo: string, minutos: number) {
   return ((potencia / 1000) * Number(precioACtivo) / 60 ) * minutos;
  }

  ngOnInit() {
  }
}

