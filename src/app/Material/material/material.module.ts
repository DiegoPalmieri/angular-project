import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';

import {
  MatNativeDateModule,
  MatPseudoCheckboxModule,
} from '@angular/material/core';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatButtonModule,
    MatToolbarModule,
    MatNativeDateModule,
    MatPseudoCheckboxModule,
    FormsModule,
    MatCardModule,
    MatFormFieldModule,
  ],

  exports: [
    MatButtonModule,
    CommonModule,
    MatToolbarModule,
    MatNativeDateModule,
    MatPseudoCheckboxModule,
    FormsModule,
    MatCardModule,
    MatFormFieldModule,
  ],
})
export class MaterialModule {}
