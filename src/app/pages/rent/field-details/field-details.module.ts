import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { FieldDetailsPage } from './field-details.page';
import { SharedModule } from 'src/app/shared/shared.module';
import { AgmCoreModule } from '@agm/core';
import { AgmDirectionModule } from 'agm-direction';
import { environment } from 'src/environments/environment';

const routes: Routes = [
  {
    path: '',
    component: FieldDetailsPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    SharedModule,
    AgmDirectionModule,
    AgmCoreModule.forRoot({
      apiKey: environment.googleAPI,
      libraries:[
        'geometry'
      ]
    }),
  ],
  declarations: [FieldDetailsPage]
})
export class FieldDetailsPageModule {}
