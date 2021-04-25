import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuSideBarComponentComponent } from './menu-side-bar-component.component';

describe('MenuSideBarComponentComponent', () => {
  let component: MenuSideBarComponentComponent;
  let fixture: ComponentFixture<MenuSideBarComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenuSideBarComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuSideBarComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
