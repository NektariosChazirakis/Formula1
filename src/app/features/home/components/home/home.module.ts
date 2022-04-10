import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatTabsModule } from '@angular/material/tabs';

@NgModule({
  declarations: [HomeComponent],
  imports: [CommonModule, FlexLayoutModule, MatTabsModule],
  exports: [HomeComponent]
})
export class HomeModule { }
