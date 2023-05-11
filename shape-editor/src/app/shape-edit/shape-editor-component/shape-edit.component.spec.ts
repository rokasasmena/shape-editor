import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShapeEditComponent } from './shape-edit.component';

describe('ShapeEditComponent', () => {
  let component: ShapeEditComponent;
  let fixture: ComponentFixture<ShapeEditComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ShapeEditComponent]
    });
    fixture = TestBed.createComponent(ShapeEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
