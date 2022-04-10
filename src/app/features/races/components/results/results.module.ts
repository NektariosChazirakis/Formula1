import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResultsComponent } from './results.component';
import {FlexLayoutModule} from '@angular/flex-layout';
import {ReactiveFormsModule} from '@angular/forms';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import {MatDividerModule} from '@angular/material/divider';
import {SeasonPickerModule} from '../../../../shared/components/season-picker/season-picker.module';
import {MatExpansionModule} from '@angular/material/expansion';
import {RaceInfoModule} from '../race-info/race-info.module';
import { LoadingModule } from '../../../../shared/components/loading/loading.module';

@NgModule({
  declarations: [ResultsComponent],
  imports: [
    CommonModule,
    FlexLayoutModule,
    ReactiveFormsModule,
    MatCardModule,
    MatFormFieldModule,
    MatSelectModule,
    MatDividerModule,
    SeasonPickerModule,
    MatExpansionModule,
    RaceInfoModule,
    LoadingModule
  ],
  exports: [ResultsComponent],
})

export class ResultsModule { }
