import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Gian2Component } from './gian2.component';

describe('Gian2Component', () => {
  let component: Gian2Component;
  let fixture: ComponentFixture<Gian2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Gian2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Gian2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
