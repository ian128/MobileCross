import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { AddnewfieldPage } from './addnewfield.page';

const routes: Routes = [
  {
    path: '',
    component: AddnewfieldPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [AddnewfieldPage]
})
export class AddnewfieldPageModule {}
