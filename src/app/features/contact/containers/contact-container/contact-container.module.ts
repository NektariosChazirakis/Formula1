import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactContainerComponent } from './contact-container.component';
import {ContactFormModule} from '../../components/contact-form/contact-form.module';
import {AppModule} from '../../../../app.module';

@NgModule({
  declarations: [ContactContainerComponent],
  imports: [CommonModule, ContactFormModule],
  exports: [ContactContainerComponent]
})
export class ContactContainerModule { }
