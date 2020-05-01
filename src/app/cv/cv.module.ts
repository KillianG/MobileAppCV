import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CVPageRoutingModule } from './cv-routing.module';

import { CVPage } from './cv.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CVPageRoutingModule
  ],
  declarations: [CVPage]
})
export class CVPageModule {}
