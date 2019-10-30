import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { SparringDiscussionPage } from './sparring-discussion.page';

const routes: Routes = [
  {
    path: '',
    component: SparringDiscussionPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [SparringDiscussionPage]
})
export class SparringDiscussionPageModule {}
