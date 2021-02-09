import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Tuukka2Component } from './tuukka2.component';

describe('Tuukka2Component', () => {
  let component: Tuukka2Component;
  let fixture: ComponentFixture<Tuukka2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Tuukka2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Tuukka2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
