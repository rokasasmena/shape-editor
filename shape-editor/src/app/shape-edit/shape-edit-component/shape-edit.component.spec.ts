import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { ShapeEditComponent } from './shape-edit.component';
import { ShapesService } from "../shapes.service";

describe('ShapeEditComponent', () => {
  let component: ShapeEditComponent;
  let fixture: ComponentFixture<ShapeEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReactiveFormsModule],
      declarations: [ShapeEditComponent],
      providers: [ShapesService]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShapeEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize the form with at least one shape control', () => {
    expect(component.shapesControls.length).toBeGreaterThanOrEqual(1);
  });

  it('should add a shape control when clicking the "Add Shape" button', () => {
    const addButton = fixture.debugElement.nativeElement.querySelector('.add-shape-button');
    addButton.click(); // Trigger click event
    fixture.detectChanges();

    const shapeControls = component.shapesControls;
    expect(shapeControls.length).toBe(1); // Expect one shape control to be added
  });

  it('should remove a shape control when clicking the "Remove Shape" button', () => {
    // Add a shape control
    component.addShapeControl();
    fixture.detectChanges();

    // Get the "Remove Shape" button
    const removeButton = fixture.nativeElement.querySelector('.remove-shape-btn');

    // Click the "Remove Shape" button
    removeButton.click();
    fixture.detectChanges();

    // Verify that the shape control was removed
    expect(component.shapesControls.length).toBe(0);
  });

  // Add more test cases for other functionality and edge cases as needed

});
