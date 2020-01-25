import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable, combineLatest } from 'rxjs';
import { map, take } from 'rxjs/operators';
import { Precios, Tramo, Fact, TramoPrecioFacts } from '../models/models';

@Injectable({
  providedIn: 'root'
})
export class DbService {

  tramoActivo$ = this.db.collection<Tramo>('tramos', ref => ref.where('activo', '==', true)).valueChanges();
  preciokwh$ = this.db.collection<Precios>('precios').doc<Precios>('precios').valueChanges();
  facts$ = this.db.collection<Fact>('facts').valueChanges();
  tramoPrecioFacts$ = combineLatest(
    [this.tramoActivo$,
    this.preciokwh$,
    this.facts$]
  ).pipe(
    map(
      ([tramo, precios, facts]) => ({ tramo, precios, facts }) as TramoPrecioFacts
    )
  );


  constructor(private db: AngularFirestore) { }

}
