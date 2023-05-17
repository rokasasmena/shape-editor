import { ComponentFixture, TestBed, fakeAsync, flush, waitForAsync } from '@angular/core/testing';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { ShapeEditComponent } from './shape-edit.component';
import { ShapesService } from "../shapes.service";
import { DebugElement } from '@angular/core';
import { of } from 'rxjs';
import { Circle, Rectangle, Shape, Square } from '../shape.model';
import { By } from '@angular/platform-browser';
import { AppModule } from 'src/app/app.module';

fdescribe('ShapeEditComponent', () => {
  let component: ShapeEditComponent,
    fixture: ComponentFixture<ShapeEditComponent>,
    el: DebugElement,
    shapes: any;

  const storedShapes: Shape[] = [
    new Square(10),
    new Circle(25),
    new Rectangle(10, 20),
    new Circle(14),
  ];

  beforeEach(waitForAsync(() => {
    const shapesSpy = jasmine.createSpyObj('ShapesService', ['getShapes', 'saveShapes']);

    TestBed.configureTestingModule({
      imports: [AppModule],
      declarations: [ShapeEditComponent],
      providers: [
        FormBuilder,
        { provide: ShapesService, useValue: shapesSpy }
      ]
    }).compileComponents()
      .then(() => {
        fixture = TestBed.createComponent(ShapeEditComponent);
        component = fixture.componentInstance;
        el = fixture.debugElement;
        shapes = TestBed.inject(ShapesService);
      });
  }));

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize the form with shape control', () => {
    shapes.getShapes.and.returnValue(of(storedShapes));

    fixture.detectChanges();

    const cards = el.queryAll(By.css('.mat-mdc-card'));

    expect(cards.length).toBeGreaterThan(0);
  });

  it('should add a shape control when clicking the "Add Shape" button', fakeAsync(() => {
    shapes.getShapes.and.returnValue(of(storedShapes));
    shapes.saveShapes.and.returnValue(of(storedShapes.push(new Circle(1))));

    fixture.detectChanges();

    const buttons = el.queryAll(By.css('button'));

    el.triggerEventHandler('click', buttons[1]);

    fixture.detectChanges();

    flush();

    const cards = el.queryAll(By.css('.mat-mdc-card'));

    expect(cards.length).toBeGreaterThan(0);
    expect(cards.pop()?.nativeElement.textContent).toContain('Area');
  }));

  it('should call removeShapeControl when clicking the "Remove Shape" button', fakeAsync(() => {
    shapes.getShapes.and.returnValue(of(storedShapes));
    spyOn(component, 'removeShapeControl');

    fixture.detectChanges();

    const button = fixture.debugElement.nativeElement.querySelector('button');

    button.click();

    flush();

    expect(component.removeShapeControl).toHaveBeenCalled();
  }));
});
