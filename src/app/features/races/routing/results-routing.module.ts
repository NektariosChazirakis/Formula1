import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';
import { ResultsContainerComponent } from '../containers/results-container/results-container.component';
import { ResultsContainerModule } from '../containers/results-container/results-container.module';

const routes: Routes = [
  {
    path: '',
    component: ResultsContainerComponent
  }
];

@NgModule({
  imports: [ResultsContainerModule, RouterModule.forChild(routes)]
})
export class ResultsRoutingModule { }
