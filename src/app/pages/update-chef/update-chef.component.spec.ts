import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateChefComponent } from './update-chef.component';

describe('UpdateChefComponent', () => {
  let component: UpdateChefComponent;
  let fixture: ComponentFixture<UpdateChefComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateChefComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateChefComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
