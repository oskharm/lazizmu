import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataPresensiComponent } from './data-presensi.component';

describe('DataPresensiComponent', () => {
  let component: DataPresensiComponent;
  let fixture: ComponentFixture<DataPresensiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DataPresensiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DataPresensiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
