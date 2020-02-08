import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { combineLatest } from 'rxjs';
import { map, switchMap, debounceTime } from 'rxjs/operators';
import { Precio, Tramo, Fact, TramoPrecioFacts } from '../models/models';

@Injectable({
  providedIn: 'root'
})
export class DbService {

  tramoActivo$ = this.db.collection<Tramo>('tramos', ref => ref.where('activo', '==', true)).valueChanges({idField: 'id'}).pipe(
    map(
      ([tramoActivo]) => tramoActivo
    ),
    debounceTime(300)
  );
  preciokwh$ = this.db.collection<Precio>('precios').valueChanges({idField: 'id'}).pipe(
    map(
      ([precios]) => precios
    )
  );

  precioActivo$ = this.tramoActivo$.pipe(
    switchMap( tramoActivo => {
      if (tramoActivo) {
        return this.db.collection<Precio>('precios', ref => ref.where('title', '==', tramoActivo.precio))
        .valueChanges({idField: 'id'})
        .pipe(
          map(
            ([precio]) => precio
          )
        );
      }
    }
    )
  );

  facts$ = this.db.collection<Fact>('facts').valueChanges({idField: 'id'});

  tramoPrecioFacts$ = combineLatest(
    [this.tramoActivo$,
    this.precioActivo$,
    this.facts$]
  ).pipe(
    map(
      ([tramo, precio, facts]) => ({ tramo, precio, facts }) as TramoPrecioFacts
    )
  );


  constructor(private db: AngularFirestore) { }

}
