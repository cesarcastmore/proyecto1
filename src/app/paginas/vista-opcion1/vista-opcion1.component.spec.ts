import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VistaOpcion1Component } from './vista-opcion1.component';

describe('VistaOpcion1Component', () => {
  let component: VistaOpcion1Component;
  let fixture: ComponentFixture<VistaOpcion1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VistaOpcion1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VistaOpcion1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
