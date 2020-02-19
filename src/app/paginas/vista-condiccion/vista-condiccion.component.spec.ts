import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VistaCondiccionComponent } from './vista-condiccion.component';

describe('VistaCondiccionComponent', () => {
  let component: VistaCondiccionComponent;
  let fixture: ComponentFixture<VistaCondiccionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VistaCondiccionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VistaCondiccionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
