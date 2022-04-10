import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactFormComponent } from './contact-form.component';
import {ReactiveFormsModule} from '@angular/forms';
import {DriverPickerModule} from '../../../../shared/components/driver-picker/driver-picker.module';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatDividerModule} from '@angular/material/divider';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {FlexLayoutModule} from '@angular/flex-layout';



@NgModule({
  declarations: [ContactFormComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    DriverPickerModule,
    MatFormFieldModule,
    MatDividerModule,
    MatSelectModule,
    MatInputModule,
    MatButtonModule,
    FlexLayoutModule
  ],
  exports: [ContactFormComponent]
})
export class ContactFormModule { }
