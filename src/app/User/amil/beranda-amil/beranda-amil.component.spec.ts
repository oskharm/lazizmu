import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BerandaAmilComponent } from './beranda-amil.component';

describe('BerandaAmilComponent', () => {
  let component: BerandaAmilComponent;
  let fixture: ComponentFixture<BerandaAmilComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BerandaAmilComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BerandaAmilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
