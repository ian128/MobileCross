import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { SparringDetailPage } from './sparring-detail.page';


const routes: Routes = [
  {
    path: '',
    component: SparringDetailPage,
    children:[
      {
        path: 'details',
        loadChildren: './sparring-info/sparring-info.module#SparringInfoPageModule'
      },
      {
        path: 'discussion',
        loadChildren: './sparring-discussion/sparring-discussion.module#SparringDiscussionPageModule'
      },
      {
        path: '',
        redirectTo: '/sparring-detail/details'
      }
    ]
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [SparringDetailPage]
})
export class SparringDetailPageModule {}
