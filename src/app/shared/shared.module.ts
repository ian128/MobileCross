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
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    IonicModule,
    FontAwesomeModule,
    RouterModule,
    ReactiveFormsModule
  ],
  declarations: [
    FooterMenuBarComponent,
    HeaderDecorComponent,
    HeaderEllipseComponent,
    SportSelectorComponent,
    CardFieldShortComponent,
    SelectorSportWordComponent,
    CardSparringComponent,
  ],
  exports: [
    FooterMenuBarComponent,
    HeaderDecorComponent,
    HeaderEllipseComponent,
    SportSelectorComponent,
    CardFieldShortComponent,
    SelectorSportWordComponent,
    CardSparringComponent,
    ReactiveFormsModule
  ]
})

export class SharedModule { }