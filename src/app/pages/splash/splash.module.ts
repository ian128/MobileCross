import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { SplashPage } from './splash.page';
import { HeaderDecorComponent } from 'src/app/shared/header-decor/header-decor.component';

const routes: Routes = [
  {
    path: '',
    component: SplashPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [
    SplashPage,
    HeaderDecorComponent
  ]
})
export class SplashPageModule {}
