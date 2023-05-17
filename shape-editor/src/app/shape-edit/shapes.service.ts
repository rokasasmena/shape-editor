import { Injectable } from "@angular/core";
import { delay, Observable, of } from "rxjs";
import { HttpClient } from '@angular/common/http';
import { Circle, Rectangle, Shape, Square } from "./shape.model";

@Injectable()
export class ShapesService {
  private storedShapes: Shape[] = [
    new Square(10),
    new Circle(25),
    new Rectangle(10, 20),
    new Circle(14),
  ];

  constructor(private http: HttpClient) {}

  getShapes (): Observable<Shape[]> {
    return of(this.storedShapes).pipe(delay(Math.random() * 1000));
  }

  saveShapes (shapes: Shape[]): Observable<Shape[]> {
    this.storedShapes = shapes;
    return of(this.storedShapes).pipe(delay(Math.random() * 1000));
  }
}
