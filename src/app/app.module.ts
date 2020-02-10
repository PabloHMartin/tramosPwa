import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from './shared/shared.module';
import { HomePageComponent } from './home-page/home-page/home-page.component';
import { TramoActivoComponent } from './home-page/components/tramo-activo/tramo-activo.component';
import { TramoSubsComponent } from './home-page/components/tramo-subs/tramo-subs.component';
import { FactsComponent } from './home-page/components/facts/facts.component';

import { environment } from '../environments/environment';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { ServiceWorkerModule } from '@angular/service-worker';

import { SwiperModule } from 'ngx-swiper-wrapper';
import { SWIPER_CONFIG } from 'ngx-swiper-wrapper';
import { SwiperConfigInterface } from 'ngx-swiper-wrapper';

import { AngularFireAnalyticsModule, CONFIG, ScreenTrackingService } from '@angular/fire/analytics';


const DEFAULT_SWIPER_CONFIG: SwiperConfigInterface = {
  direction: 'horizontal',
  slidesPerView: 'auto'
};

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    TramoActivoComponent,
    TramoSubsComponent,
    FactsComponent,
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAnalyticsModule,
    AngularFirestoreModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SwiperModule,
    SharedModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [
    ScreenTrackingService,
    {
      provide: SWIPER_CONFIG,
      useValue: DEFAULT_SWIPER_CONFIG
    },
     { provide: CONFIG, useValue: {
      send_page_view: false,
      allow_ad_personalization_signals: false,
      anonymize_ip: true
    } }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
