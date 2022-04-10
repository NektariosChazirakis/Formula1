import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WinnersResultsComponent } from './winners-results.component';

describe('WinnersResultsComponent', () => {
  let component: WinnersResultsComponent;
  let fixture: ComponentFixture<WinnersResultsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WinnersResultsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WinnersResultsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
