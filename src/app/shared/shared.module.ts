import { NgModule} from '@angular/core';
import { HeaderDecorComponent } from './header-decor/header-decor.component';
import { HeaderEllipseComponent } from './header-ellipse/header-ellipse.component';
import { FooterMenuBarComponent } from './footer-menu-bar/footer-menu-bar.component';
import { IonicModule } from '@ionic/angular';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SportSelectorComponent } from './sport-selector/sport-selector.component';
import { CardFieldShortComponent } from './card-field-short/card-field-short.component';
import { SelectorSportWordComponent } from './selector-sport-word/selector-sport-word.component';
import { CardSparringComponent } from './card-sparring/card-sparring.component';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { SelectFieldComponent } from '../pages/addnewevent/select-field/select-field.component';
import { CommonModule } from '@angular/common';
import { AgmCoreModule } from '@agm/core';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { environment } from 'src/environments/environment';

@NgModule({
  imports: [
    IonicModule,
    FontAwesomeModule,
    RouterModule,
    ReactiveFormsModule,
    FormsModule,
    CommonModule,
    AgmCoreModule.forRoot({
      apiKey: environment.googleAPI,
      libraries:[
        'geometry'
      ]
    }),
    AngularFireDatabaseModule,
  ],
  declarations: [
    FooterMenuBarComponent,
    HeaderDecorComponent,
    HeaderEllipseComponent,
    SportSelectorComponent,
    CardFieldShortComponent,
    SelectorSportWordComponent,
    CardSparringComponent,
    SelectFieldComponent,
    
  ],
  exports: [
    FooterMenuBarComponent,
    HeaderDecorComponent,
    HeaderEllipseComponent,
    SportSelectorComponent,
    CardFieldShortComponent,
    SelectorSportWordComponent,
    CardSparringComponent,
    SelectFieldComponent,
    ReactiveFormsModule,
    AngularFireDatabaseModule,
  ],
  entryComponents:[
    SelectFieldComponent,
  ]
})

export class SharedModule { }