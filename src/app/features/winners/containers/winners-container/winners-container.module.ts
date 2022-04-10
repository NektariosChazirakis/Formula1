import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WinnersContainerComponent } from './winners-container.component';
import {ResultsModule} from '../../../races/components/results/results.module';
import {WinnersResultsModule} from '../../components/winners-results/winners-results.module';

@NgModule({
  declarations: [WinnersContainerComponent],
  imports: [CommonModule, WinnersResultsModule],
  exports: [WinnersContainerComponent],
})
export class WinnersContainerModule { }
