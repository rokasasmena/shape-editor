import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LazyComponent } from './lazy/lazy.component';
import { Lazy2Component } from './lazy2/lazy2.component';
import { LazyRoutingModule } from './lazy-routing.module';


@NgModule({
  declarations: [
    LazyComponent,
    Lazy2Component
  ],
  imports: [
    CommonModule,
    LazyRoutingModule
  ]
})
export class LazyModule { }
