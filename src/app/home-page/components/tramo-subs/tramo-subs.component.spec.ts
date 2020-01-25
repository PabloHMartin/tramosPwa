import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TramoSubsComponent } from './tramo-subs.component';

describe('TramoSubsComponent', () => {
  let component: TramoSubsComponent;
  let fixture: ComponentFixture<TramoSubsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TramoSubsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TramoSubsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
