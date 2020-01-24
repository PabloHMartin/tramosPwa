import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { MatButtonModule, MatToolbarModule, MatSidenavModule, MatIconModule, MatListModule, MatTooltipModule, MatCardModule, MatFormFieldModule, MatInputModule, MatChipsModule, MatSelectModule } from '@angular/material';
import { LayoutModule } from '@angular/cdk/layout';
import { RouterModule } from '@angular/router';
import { ShellComponent } from './shell/shell.component';



const components = [ShellComponent];

const modules = [
  CommonModule,
  MatButtonModule,
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
];


@NgModule({
  declarations: [...components, ShellComponent,],
  imports: [
    ...modules
  ],
  exports: [
    ...components,
    ...modules
  ],

})
export class SharedModule { }
