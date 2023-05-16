import { TestBed, ComponentFixture } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { ShapeEditComponent } from './shape-edit/shape-edit-component/shape-edit.component';
import { ReactiveFormsModule } from '@angular/forms';

let fixture: ComponentFixture<AppComponent>;
let element: HTMLElement;

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AppComponent, ShapeEditComponent],
      imports: [ReactiveFormsModule],
    }).compileComponents();

    fixture = TestBed.createComponent(AppComponent);
    element = fixture.nativeElement;
  });

  it('should create the app', () => {
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'shape-editor'`, () => {
    const app = fixture.componentInstance;
    expect(app.title).toEqual('shape-editor');
  });

  it('should render title', () => {
    fixture.detectChanges();
    expect(element.querySelector('.content span')?.textContent).toContain('shape-editor app is running!');
  });
});
