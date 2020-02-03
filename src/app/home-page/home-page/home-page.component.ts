import { Component, OnInit } from '@angular/core';
import { DbService } from 'src/app/shared/services/db.service';
import { catchError, map, tap } from 'rxjs/operators';
import { of } from 'rxjs';
import { TramoPrecioFacts } from 'src/app/shared/models/models';

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

  constructor(public db: DbService) { }

  ngOnInit() {
  }

}
