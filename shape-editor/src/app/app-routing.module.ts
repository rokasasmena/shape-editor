import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: '/lazy-component-1', pathMatch: 'full' },
  { path: 'lazy-component-1', loadChildren: () => import('./lazy-loading/lazy.module').then(m => m.LazyModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
