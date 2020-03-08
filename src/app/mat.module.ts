import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { MatDividerModule } from '@angular/material/divider';

const angularMaterial = [
  MatButtonModule, MatListModule, MatDividerModule
]

@NgModule({
  imports: [angularMaterial],
  exports: [angularMaterial]
})
export class MatModule { }
