import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ShapeEditComponent } from './shape-edit/shape-editor-component/shape-edit.component';
import { ShapesService } from './shape-edit/shapes.service';

@NgModule({
  declarations: [
    AppComponent,
    ShapeEditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [ShapesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
