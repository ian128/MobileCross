import { NgModule} from '@angular/core';
import { HeaderDecorComponent } from './header-decor/header-decor.component';
import { HeaderEllipseComponent } from './header-ellipse/header-ellipse.component';


@NgModule({
  imports: [
  ],
  declarations: [
    HeaderDecorComponent,
    HeaderEllipseComponent
  ],
  exports: [
    HeaderDecorComponent,
    HeaderEllipseComponent
  ]
})

export class SharedModule { }