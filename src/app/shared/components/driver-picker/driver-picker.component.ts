import {ChangeDetectionStrategy, Component, forwardRef, Input, OnInit} from '@angular/core';
import {ControlValueAccessor, FormControl, NG_VALUE_ACCESSOR} from '@angular/forms';
import {Season} from '../../interfaces/season.interface';
import {RaceDriver} from '../../interfaces/race-driver.interface';

@Component({
  selector: 'app-driver-picker',
  templateUrl: './driver-picker.component.html',
  styleUrls: ['./driver-picker.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => DriverPickerComponent),
      multi: true
    }
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DriverPickerComponent implements ControlValueAccessor {

  @Input() drivers: RaceDriver[] = [];
  @Input() label: string = '';

  driverControl = new FormControl();

  public onChange = (value: any) => {};
  public onTouched = (value: any) => {};

  constructor() {}

  writeValue(value: any) {
    if (value) {
      this.driverControl.patchValue(value);
    } else {
      this.driverControl.reset();
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

  getFullName(raceDriver: RaceDriver): string {
    return raceDriver.givenName + ' ' + raceDriver.familyName;
  }

}
