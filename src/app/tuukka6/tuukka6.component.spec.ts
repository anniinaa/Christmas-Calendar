import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Tuukka6Component } from './tuukka6.component';

describe('Tuukka6Component', () => {
  let component: Tuukka6Component;
  let fixture: ComponentFixture<Tuukka6Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Tuukka6Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Tuukka6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
