import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Gian3Component } from './gian3.component';

describe('Gian3Component', () => {
  let component: Gian3Component;
  let fixture: ComponentFixture<Gian3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Gian3Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Gian3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
