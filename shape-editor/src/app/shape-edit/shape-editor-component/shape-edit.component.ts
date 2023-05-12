import { Component, OnInit } from '@angular/core';
import { ShapesService } from '../shapes.service';
import { Shape } from '../shape.model';

@Component({
  selector: 'app-shape-edit',
  templateUrl: './shape-edit.component.html',
  styleUrls: ['./shape-edit.component.scss']
})
export class ShapeEditComponent implements OnInit {
  shapes: Shape[] = [];

  constructor(private shapesService: ShapesService) { }

  ngOnInit() {
    this.getShapes();
  }

  getShapes() {
    this.shapesService.getShapes().subscribe(shapes => {
      this.shapes = shapes;
    });
  }

  calculateArea(shape: Shape): number {
    if (shape.type === 'Circle' && shape.radius !== undefined) {
      return Math.PI * shape.radius * shape.radius;
    } else if (shape.type === 'Rectangle' && shape.length !== undefined && shape.width !== undefined) {
      return shape.length * shape.width;
    } else if (shape.type === 'Square' && shape.length !== undefined) {
      return shape.length * shape.length;
    }
    return 0;
  }
}
