import { NgModule} from '@angular/core';
import { HeaderDecorComponent } from './header-decor/header-decor.component';
import { HeaderEllipseComponent } from './header-ellipse/header-ellipse.component';
import { FooterMenuBarComponent } from './footer-menu-bar/footer-menu-bar.component';
import { IonicModule } from '@ionic/angular';

@NgModule({
  imports: [
    IonicModule
  ],
  declarations: [
    FooterMenuBarComponent,
    HeaderDecorComponent,
    HeaderEllipseComponent,
  ],
  exports: [
    FooterMenuBarComponent,
    HeaderDecorComponent,
    HeaderEllipseComponent,
  ]
})

export class SharedModule { }