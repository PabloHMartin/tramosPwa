import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { dialogData } from 'src/app/shared/models/models';

@Component({
  selector: 'app-info-dialog',
  template: `
  <h1 mat-dialog-title><mat-icon>info</mat-icon>info adicional </h1>
  <div class="mat-dialog-content" mat-dialog-content>
      <div>
        <p>estimación basada en {{data.title}} de {{data.potencia}} watios de potencia.</p>
      </div>
    <div *ngFor="let item of data.precios ">
      <div>coste en tramo {{item.title}}: {{ (data.potencia/1000 * item.precio/60 * data.minutos) | number : '1.2-2'}} €</div>
    </div>
    <div mat-dialog-actions>
      <button mat-button (click)="onNoClick()">cerrar</button>
    </div>
  </div>
  `,
  styles: [
    ':host { font-family: "Dosis", sans-serif; display: flex; flex-direction: column; justify-content: space-evenly;}',
    'h1{display: flex; justify-content:flex-start; align-items: center;}',
    '/deep/ .mat-dialog-content{ overflow-y: hidden !important;}',
    '.mat-dialog-content{display: flex; flex-direction: column; justify-content: space-between; height: 15rem;}',
  ]
})
export class InfoDialogComponent{

  constructor(public dialogRef: MatDialogRef<InfoDialogComponent>,
              @Inject(MAT_DIALOG_DATA) public data: dialogData) { }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
