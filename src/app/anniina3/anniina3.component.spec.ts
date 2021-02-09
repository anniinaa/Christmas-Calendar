import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Anniina3Component } from './anniina3.component';

describe('Anniina3Component', () => {
  let component: Anniina3Component;
  let fixture: ComponentFixture<Anniina3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Anniina3Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Anniina3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
