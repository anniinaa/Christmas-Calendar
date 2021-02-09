import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Anniina4Component } from './anniina4.component';

describe('Anniina4Component', () => {
  let component: Anniina4Component;
  let fixture: ComponentFixture<Anniina4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Anniina4Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Anniina4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
