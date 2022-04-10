import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DriverPickerComponent } from './driver-picker.component';
import {ReactiveFormsModule} from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';



@NgModule({
  declarations: [DriverPickerComponent],
  imports: [CommonModule, ReactiveFormsModule, MatFormFieldModule, MatSelectModule],
  exports: [DriverPickerComponent]
})
export class DriverPickerModule { }
