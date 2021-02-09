import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Anniina5Component } from './anniina5.component';

describe('Anniina5Component', () => {
  let component: Anniina5Component;
  let fixture: ComponentFixture<Anniina5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Anniina5Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Anniina5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
