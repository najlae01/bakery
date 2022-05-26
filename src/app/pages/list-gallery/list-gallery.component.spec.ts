import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListGalleryComponent } from './list-gallery.component';

describe('ListGalleryComponent', () => {
  let component: ListGalleryComponent;
  let fixture: ComponentFixture<ListGalleryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListGalleryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListGalleryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
