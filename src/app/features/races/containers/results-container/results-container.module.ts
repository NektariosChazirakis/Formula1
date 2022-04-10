import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResultsContainerComponent } from './results-container.component';
import {ResultsModule} from '../../components/results/results.module';

@NgModule({
  declarations: [ResultsContainerComponent],
  imports: [CommonModule, ResultsModule],
  exports: [ResultsContainerComponent]
})

export class ResultsContainerModule { }
