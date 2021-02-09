import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Tuukka5Component } from './tuukka5.component';

describe('Tuukka5Component', () => {
  let component: Tuukka5Component;
  let fixture: ComponentFixture<Tuukka5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Tuukka5Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Tuukka5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
