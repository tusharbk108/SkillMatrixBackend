import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SkillMatrixComponent } from './skill-matrix/skill-matrix.component';

const routes: Routes = [
  {path:"", component:SkillMatrixComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
