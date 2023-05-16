import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormArray, AbstractControl } from '@angular/forms';
import { ShapesService } from '../shapes.service';
import { Shape } from '../shape.model';

@Component({
  selector: 'app-shape-edit',
  templateUrl: './shape-edit.component.html',
  styleUrls: ['./shape-edit.component.scss']
})
export class ShapeEditComponent implements OnInit {
  shapes: Shape[] = [];
  form: FormGroup;

  constructor(private shapesService: ShapesService, private fb: FormBuilder) {
    this.form = this.fb.group({
      shapes: this.fb.array([], [Validators.minLength(1)])
    });
  }

  ngOnInit() {
    this.shapesService.getShapes()
      .subscribe((shapes: Shape[]) => {
        this.shapes = shapes;
        this.initForm();
      });
  }

  initForm(): void {
    this.form = this.fb.group({
      shapes: this.fb.array([], [Validators.minLength(1)])
    });

    this.shapes.forEach(shape => {
      this.addShapeControl(shape);
    });
  }

  get shapesControls() {
    return this.form.get('shapes') as FormArray;
  }

  addShapeControl(shape?: Shape): void {
    const defaultShape: Shape = shape || {};

    const shapeGroup = this.fb.group({
      _type: [defaultShape.type],
      radius: [defaultShape.radius || 0, [Validators.required, Validators.min(0)]],
      length: [defaultShape.length || 0, [Validators.required, Validators.min(0)]],
      width: [defaultShape.width || 0, [Validators.required, Validators.min(0)]],
      size: [defaultShape.size || 0, [Validators.required, Validators.min(0)]],
    });

    this.shapesControls.push(shapeGroup);
  }

  removeShapeControl(index: number): void {
    this.shapesControls.removeAt(index);
  }

  getArea(shapeCtrl: AbstractControl): number {
    const type = shapeCtrl.get('_type')?.value;
    const radius = shapeCtrl.get('radius')?.value;
    const size = shapeCtrl.get('size')?.value;
    const length = shapeCtrl.get('length')?.value;
    const width = shapeCtrl.get('width')?.value;

    switch (type) {
      case 'Circle':
        return Math.PI * Math.pow(radius, 2);
      case 'Square':
        return Math.pow(size, 2);
      case 'Rectangle':
        return length * width;
      default:
        return 0;
    }
  }

  saveForm(): void {
    const shapes = this.form.value.shapes;
    this.shapesService.saveShapes(shapes).subscribe((savedShapes: Shape[]) => {
      this.shapes = savedShapes;
      console.log('Form submitted');
    });
  }
}
