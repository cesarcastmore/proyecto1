import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VistaRutasAnidadasComponent } from './vista-rutas-anidadas.component';

describe('VistaRutasAnidadasComponent', () => {
  let component: VistaRutasAnidadasComponent;
  let fixture: ComponentFixture<VistaRutasAnidadasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VistaRutasAnidadasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VistaRutasAnidadasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
