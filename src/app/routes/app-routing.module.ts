import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from '../features/home/components/home/home.component';
import {ResultsContainerComponent} from '../features/races/containers/results-container/results-container.component';
import {WinnersContainerComponent} from '../features/winners/containers/winners-container/winners-container.component';
import {ContactContainerComponent} from '../features/contact/containers/contact-container/contact-container.component';

const routes: Routes = [
  { path: 'home',
    component: HomeComponent
  },
  { path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  { path: 'races',
    component: ResultsContainerComponent,
    loadChildren: () => import('../features/races/routing/results-routing.module')
      .then((m) => m.ResultsRoutingModule),
  },
  { path: 'winners',
    component: WinnersContainerComponent,
    loadChildren: () => import('../features/winners/routing/winners-routing.module')
      .then((m) => m.WinnersRoutingModule),
  },
  { path: 'contact',
    component: ContactContainerComponent,
    loadChildren: () => import('../features/contact/routing/contact-routing.module')
      .then((m) => m.ContactRoutingModule),
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
