import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Anniina1Component } from './anniina1.component';

describe('Anniina1Component', () => {
  let component: Anniina1Component;
  let fixture: ComponentFixture<Anniina1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Anniina1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Anniina1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
