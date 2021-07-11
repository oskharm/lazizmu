import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PresensiMasukComponent } from './presensi-masuk.component';

describe('PresensiMasukComponent', () => {
  let component: PresensiMasukComponent;
  let fixture: ComponentFixture<PresensiMasukComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PresensiMasukComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PresensiMasukComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
