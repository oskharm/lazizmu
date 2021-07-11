import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AmilComponent } from './amil.component';

describe('BerandaAmilComponent', () => {
  let component: AmilComponent;
  let fixture: ComponentFixture<AmilComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AmilComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AmilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
