import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RaceInfoComponent } from './race-info.component';
import { MatExpansionModule } from '@angular/material/expansion';
import {FlexLayoutModule} from '@angular/flex-layout';

@NgModule({
  declarations: [RaceInfoComponent],
  imports: [CommonModule, MatExpansionModule, FlexLayoutModule],
  exports: [RaceInfoComponent]
})

export class RaceInfoModule { }
