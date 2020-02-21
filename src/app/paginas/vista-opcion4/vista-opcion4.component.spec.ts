import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VistaOpcion4Component } from './vista-opcion4.component';

describe('VistaOpcion4Component', () => {
  let component: VistaOpcion4Component;
  let fixture: ComponentFixture<VistaOpcion4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VistaOpcion4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VistaOpcion4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
