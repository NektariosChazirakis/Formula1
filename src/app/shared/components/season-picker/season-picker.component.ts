import {ChangeDetectionStrategy, Component, forwardRef, Input} from '@angular/core';
import {ControlValueAccessor, FormControl, NG_VALUE_ACCESSOR} from '@angular/forms';
import {Season} from '../../interfaces/season.interface';

@Component({
  selector: 'app-season-picker',
  templateUrl: './season-picker.component.html',
  styleUrls: ['./season-picker.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => SeasonPickerComponent),
      multi: true
    }
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class SeasonPickerComponent implements ControlValueAccessor {

  @Input() seasons: Season[] = [];
  @Input() label: string = '';

  seasonControl = new FormControl();

  public onChange = (value: any) => {};
  public onTouched = (value: any) => {};

  constructor() {}

  writeValue(value: any) {
    if (value) {
      this.seasonControl.patchValue(value);
    } else {
      this.seasonControl.reset();
    }
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  optionSelected(season: string) {
    this.onChange(season);
  }

}
