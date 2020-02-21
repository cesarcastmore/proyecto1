import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VistaOpcion3Component } from './vista-opcion3.component';

describe('VistaOpcion3Component', () => {
  let component: VistaOpcion3Component;
  let fixture: ComponentFixture<VistaOpcion3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VistaOpcion3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VistaOpcion3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
