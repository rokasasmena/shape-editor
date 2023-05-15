import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ShapeEditComponent } from './shape-edit/shape-editor-component/shape-edit.component';
import { ShapesService } from './shape-edit/shapes.service';
import { LazyModule } from './lazy-loading/lazy.module';

@NgModule({
  declarations: [
    AppComponent,
    ShapeEditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    LazyModule
  ],
  providers: [ShapesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
