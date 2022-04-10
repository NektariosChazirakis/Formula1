import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';
import { ContactContainerModule } from '../containers/contact-container/contact-container.module';
import { ContactContainerComponent } from '../containers/contact-container/contact-container.component';

const routes: Routes = [
  {
    path: '',
    component: ContactContainerComponent
  }
];

@NgModule({
  imports: [ContactContainerModule, RouterModule.forChild(routes)]
})

export class ContactRoutingModule { }
