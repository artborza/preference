import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuSideBarSubComponentComponent } from './menu-side-bar-sub-component.component';

describe('MenuSideBarSubComponentComponent', () => {
  let component: MenuSideBarSubComponentComponent;
  let fixture: ComponentFixture<MenuSideBarSubComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenuSideBarSubComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuSideBarSubComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
