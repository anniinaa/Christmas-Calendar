import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Gian4Component } from './gian4.component';

describe('Gian4Component', () => {
  let component: Gian4Component;
  let fixture: ComponentFixture<Gian4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Gian4Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Gian4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
