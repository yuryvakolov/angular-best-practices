import {NgModule} from '@angular/core';
import {HeaderComponent} from './components/header/header.component';
import { SvgIconComponent } from './components/svg-icon/svg-icon.component';


@NgModule({
  declarations: [HeaderComponent, SvgIconComponent],
  exports: [
    HeaderComponent, SvgIconComponent
  ]
})
export class SharedModule {
}
