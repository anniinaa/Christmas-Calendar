import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Gian6Component } from './gian6.component';

describe('Gian6Component', () => {
  let component: Gian6Component;
  let fixture: ComponentFixture<Gian6Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Gian6Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Gian6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
