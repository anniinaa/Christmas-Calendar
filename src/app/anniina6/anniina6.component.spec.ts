import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Anniina6Component } from './anniina6.component';

describe('Anniina6Component', () => {
  let component: Anniina6Component;
  let fixture: ComponentFixture<Anniina6Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Anniina6Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Anniina6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
