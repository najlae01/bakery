import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuPerCategoryComponent } from './menu-per-category.component';

describe('MenuPerCategoryComponent', () => {
  let component: MenuPerCategoryComponent;
  let fixture: ComponentFixture<MenuPerCategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenuPerCategoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuPerCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
