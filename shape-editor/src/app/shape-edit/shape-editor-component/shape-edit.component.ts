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
}
