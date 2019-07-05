import { NgModule } from '@angular/core';
import {
  MatInputModule,
  MatSelectModule,
  MatFormFieldModule,
  MatButtonModule
} from '@angular/material';

const modules = [
  MatFormFieldModule,
  MatInputModule,
  MatSelectModule,
  MatButtonModule
];

@NgModule({
  imports: [...modules],
  exports: [...modules]
})
export class MaterialModule {}
