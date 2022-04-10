import {ChangeDetectionStrategy, Component, Input} from '@angular/core';
import {RaceDriver} from '../../../../shared/interfaces/race-driver.interface';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ResultsService} from '../../../../shared/services/results.service';
import {Observable, of} from 'rxjs';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ContactFormComponent {

  @Input() drivers: RaceDriver[] = [];

  contactForm: FormGroup = this.fb.group({
    driver: [null, Validators.required],
    subject: [null],
    message: [null, Validators.required],
  })

  formData!: FormData;
  submitted: boolean = false;
  responseMessage$!: Observable<string>; // the response message to show to the user

  constructor(private fb: FormBuilder, private resultsService: ResultsService) { }

  onSubmit(): void {
    this.contactForm.disable();
    this.prepareFormData();
    this.responseMessage$ = this.resultsService.sendMessage(this.formData);
    this.submitted = true;
  }

  prepareFormData() {
    this.formData = new FormData();
    this.formData.append('driver', this.contactForm.get('driver')!.value);
    this.formData.append('subject', this.contactForm.get('subject')!.value);
    this.formData.append('message', this.contactForm.get('message')!.value);
  }


}
