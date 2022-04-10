import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SeasonPickerComponent } from './season-picker.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [SeasonPickerComponent],
  imports: [CommonModule, ReactiveFormsModule, MatFormFieldModule, MatSelectModule ],
  exports: [SeasonPickerComponent]
})

export class SeasonPickerModule { }
