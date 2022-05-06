import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PickCsvFileComponent } from './pick-csv-file.component';

describe('PickCsvFileComponent', () => {
  let component: PickCsvFileComponent;
  let fixture: ComponentFixture<PickCsvFileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PickCsvFileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PickCsvFileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
