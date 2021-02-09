import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Tuukka3Component } from './tuukka3.component';

describe('Tuukka3Component', () => {
  let component: Tuukka3Component;
  let fixture: ComponentFixture<Tuukka3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Tuukka3Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Tuukka3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
