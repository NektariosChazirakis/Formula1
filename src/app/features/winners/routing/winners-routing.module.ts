import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {ResultsContainerComponent} from '../../races/containers/results-container/results-container.component';
import {ResultsContainerModule} from '../../races/containers/results-container/results-container.module';
import {WinnersContainerModule} from '../containers/winners-container/winners-container.module';
import {WinnersContainerComponent} from '../containers/winners-container/winners-container.component';

const routes: Routes = [
  {
    path: '',
    component: WinnersContainerComponent
  }
];


@NgModule({
  imports: [WinnersContainerModule, RouterModule.forChild(routes)]
})
export class WinnersRoutingModule { }
