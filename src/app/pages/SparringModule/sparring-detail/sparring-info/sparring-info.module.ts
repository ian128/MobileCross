import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { SparringInfoPage } from './sparring-info.page';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {AgmCoreModule} from '@agm/core';
import { AgmDirectionModule } from 'agm-direction';   // agm-direction
import { SharedModule } from 'src/app/shared/shared.module';

const routes: Routes = [
  {
    path: '',
    component: SparringInfoPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FontAwesomeModule,
    RouterModule.forChild(routes),
    SharedModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAmlnIAu52yOhMzIPFGxSsDaHB9TXmqhQk',
      libraries:[
        'geometry'
      ]
    }),
    AgmDirectionModule
  ],
  declarations: [SparringInfoPage]
})
export class SparringInfoPageModule {}
