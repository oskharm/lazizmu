import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PresensiPulangComponent } from './presensi-pulang.component';

describe('PresensiPulangComponent', () => {
  let component: PresensiPulangComponent;
  let fixture: ComponentFixture<PresensiPulangComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PresensiPulangComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PresensiPulangComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
