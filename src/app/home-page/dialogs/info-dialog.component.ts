import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-info-dialog',
  template: `
  <h1 mat-dialog-title>info adicional</h1>
  <div mat-dialog-content>
      <div>
        <p>estimación basada en {{data.title}} de {{data.potencia}} watios de potencia.</p>
      </div>
  {{data.precios | json}}
    <div>
      <div>Coste en tramo económico: xx €</div>
      <div>Coste en tramo medio: xx €</div>
      <div>Coste en tramo caro: xx €</div>
    </div>
    <div mat-dialog-actions>
      <button mat-button (click)="onNoClick()">OK</button>
    </div>
  </div>
  `,
  styles: []
})
export class InfoDialogComponent{

  constructor(public dialogRef: MatDialogRef<InfoDialogComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any) { }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
