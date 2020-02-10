import { Component, OnInit } from '@angular/core';
import { DbService } from 'src/app/shared/services/db.service';
import { catchError, map, tap } from 'rxjs/operators';
import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';
import { of, Observable } from 'rxjs';
import { TramoPrecioFacts, Precio } from 'src/app/shared/models/models';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  tramoData$ = this.db.tramoPrecioFacts$.pipe<TramoPrecioFacts>(
    catchError(error => {
      return of(null);
    })
  );
  precios$ = this.db.preciokwh$.pipe<Precio[] & {id: string}>(
    catchError(error => {
      return of(null);
    })
  );



  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
  .pipe(
    map(result => result.matches)
  );


  constructor(public db: DbService, private breakpointObserver: BreakpointObserver) { }

  ngOnInit() {
  }

}
