import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Tuukka1Component } from './tuukka1.component';

describe('Tuukka1Component', () => {
  let component: Tuukka1Component;
  let fixture: ComponentFixture<Tuukka1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Tuukka1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Tuukka1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
