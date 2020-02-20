import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VistaCustomizadaPipeComponent } from './vista-customizada-pipe.component';

describe('VistaCustomizadaPipeComponent', () => {
  let component: VistaCustomizadaPipeComponent;
  let fixture: ComponentFixture<VistaCustomizadaPipeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VistaCustomizadaPipeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VistaCustomizadaPipeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
