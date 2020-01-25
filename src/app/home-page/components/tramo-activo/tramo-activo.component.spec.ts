import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TramoActivoComponent } from './tramo-activo.component';

describe('TramoActivoComponent', () => {
  let component: TramoActivoComponent;
  let fixture: ComponentFixture<TramoActivoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TramoActivoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TramoActivoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
