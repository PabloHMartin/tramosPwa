import { Component, OnInit, Input } from '@angular/core';
import { Fact, Precio } from 'src/app/shared/models/models';
import { SwiperConfigInterface } from 'ngx-swiper-wrapper';
import { MatDialog } from '@angular/material/dialog';
import {InfoDialogComponent} from '../../dialogs/info-dialog.component';


@Component({
  selector: 'app-facts',
  templateUrl: './facts.component.html',
  styleUrls: ['./facts.component.scss']
})
export class FactsComponent implements OnInit {

  @Input() facts: Fact[];
  @Input() precioACtivo: string;
  @Input() isHandset: boolean;
  @Input() precios: Precio[];

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

  constructor(public dialog: MatDialog) { }


  calculoPrecio(potencia: number, precioACtivo: string, minutos: number) {
   return ((potencia / 1000) * Number(precioACtivo) / 60 ) * minutos;
  }

  ngOnInit() {
  }

  openFactDialog(title: string, potencia: number, minutos: number): void {
    this.dialog.open(InfoDialogComponent, {
      width: '85vw',
      data: {
        title: title,
        potencia: potencia,
        minutos: minutos,
        precios: this.precios
      }
    });
  }
}

