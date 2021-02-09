import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Gian5Component } from './gian5.component';

describe('Gian5Component', () => {
  let component: Gian5Component;
  let fixture: ComponentFixture<Gian5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Gian5Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Gian5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
