import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Anniina2Component } from './anniina2.component';

describe('Anniina2Component', () => {
  let component: Anniina2Component;
  let fixture: ComponentFixture<Anniina2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Anniina2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Anniina2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
