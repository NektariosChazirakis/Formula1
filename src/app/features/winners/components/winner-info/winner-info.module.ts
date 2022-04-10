import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WinnerInfoComponent } from './winner-info.component';
import {MatExpansionModule} from '@angular/material/expansion';
import {FlexLayoutModule} from '@angular/flex-layout';



@NgModule({
  declarations: [WinnerInfoComponent],
  imports: [CommonModule, MatExpansionModule, FlexLayoutModule],
  exports: [WinnerInfoComponent]
})
export class WinnerInfoModule { }
