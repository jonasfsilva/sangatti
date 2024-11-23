import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CuriositiesComponent } from './curiosities.component';

describe('CuriositiesComponent', () => {
  let component: CuriositiesComponent;
  let fixture: ComponentFixture<CuriositiesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CuriositiesComponent]
    });
    fixture = TestBed.createComponent(CuriositiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
