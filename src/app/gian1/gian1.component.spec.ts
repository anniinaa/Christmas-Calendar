import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Gian1Component } from './gian1.component';

describe('Gian1Component', () => {
  let component: Gian1Component;
  let fixture: ComponentFixture<Gian1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Gian1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Gian1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
