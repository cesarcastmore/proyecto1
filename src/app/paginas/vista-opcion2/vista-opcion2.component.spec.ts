import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VistaOpcion2Component } from './vista-opcion2.component';

describe('VistaOpcion2Component', () => {
  let component: VistaOpcion2Component;
  let fixture: ComponentFixture<VistaOpcion2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VistaOpcion2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VistaOpcion2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
