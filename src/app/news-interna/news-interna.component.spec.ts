import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsInternaComponent } from './news-interna.component';

describe('NewsInternaComponent', () => {
  let component: NewsInternaComponent;
  let fixture: ComponentFixture<NewsInternaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NewsInternaComponent]
    });
    fixture = TestBed.createComponent(NewsInternaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
