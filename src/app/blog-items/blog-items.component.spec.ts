import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogItemsComponent } from './blog-items.component';

describe('BlogItemsComponent', () => {
  let component: BlogItemsComponent;
  let fixture: ComponentFixture<BlogItemsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BlogItemsComponent]
    });
    fixture = TestBed.createComponent(BlogItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
