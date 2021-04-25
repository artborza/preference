import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainPreferenceComponent } from './main-preference.component';

describe('MainPreferenceComponent', () => {
  let component: MainPreferenceComponent;
  let fixture: ComponentFixture<MainPreferenceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainPreferenceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainPreferenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
