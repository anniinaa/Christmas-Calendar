import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Tuukka4Component } from './tuukka4.component';

describe('Tuukka4Component', () => {
  let component: Tuukka4Component;
  let fixture: ComponentFixture<Tuukka4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Tuukka4Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Tuukka4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
