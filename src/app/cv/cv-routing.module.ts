import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CVPage } from './cv.page';

const routes: Routes = [
  {
    path: '',
    component: CVPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CVPageRoutingModule {}
