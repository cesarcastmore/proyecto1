import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VistaDecimalPipeComponent } from './vista-decimal-pipe.component';

describe('VistaDecimalPipeComponent', () => {
  let component: VistaDecimalPipeComponent;
  let fixture: ComponentFixture<VistaDecimalPipeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VistaDecimalPipeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VistaDecimalPipeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
