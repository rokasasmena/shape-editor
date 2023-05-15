import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LazyComponent } from './lazy/lazy.component';
import { Lazy2Component } from './lazy2/lazy2.component';


const routes: Routes = [
  { path: '', component: LazyComponent },
  { path: 'lazy-component-2', component: Lazy2Component }
  ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LazyRoutingModule { }
