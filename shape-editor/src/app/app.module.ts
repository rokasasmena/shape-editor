import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ShapeEditComponent } from './shape-edit/shape-edit-component/shape-edit.component';
import { ShapesService } from './shape-edit/shapes.service';
import { LazyModule } from './lazy-loading/lazy.module';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', component: ShapeEditComponent }
];

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
    LazyModule,
    RouterModule.forRoot(routes),
  ],
  exports: [RouterModule],
  providers: [ShapesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
