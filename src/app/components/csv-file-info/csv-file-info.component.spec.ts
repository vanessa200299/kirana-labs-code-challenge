import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CsvFileInfoComponent } from './csv-file-info.component';

describe('CsvFileInfoComponent', () => {
  let component: CsvFileInfoComponent;
  let fixture: ComponentFixture<CsvFileInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CsvFileInfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CsvFileInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

