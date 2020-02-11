import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { MatButtonModule, MatToolbarModule, MatSidenavModule, MatIconModule, MatListModule, MatTooltipModule, MatCardModule, MatFormFieldModule, MatInputModule, MatChipsModule, MatSelectModule, MatProgressSpinnerModule, MatDialog, MatDialogModule } from '@angular/material';
import { LayoutModule } from '@angular/cdk/layout';
import { RouterModule } from '@angular/router';
import { ShellComponent } from './shell/shell.component';
import { DbService } from './services/db.service';
import { LoadingComponent } from './loading/loading.component';



const components = [ShellComponent, LoadingComponent];

const modules = [
  CommonModule,
  MatButtonModule,
  MatProgressSpinnerModule,
  LayoutModule,
  MatToolbarModule,
  MatSidenavModule,
  MatIconModule,
  MatListModule,
  RouterModule,
  MatTooltipModule,
  MatCardModule,
  MatFormFieldModule,
  MatInputModule,
  MatChipsModule,
  MatSelectModule,
  MatDialogModule,
];


@NgModule({
  declarations: [...components, ShellComponent, LoadingComponent,],
  imports: [
    ...modules
  ],
  exports: [
    ...components,
    ...modules,
  ],

})
export class SharedModule { }
