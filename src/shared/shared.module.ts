import { NgModule } from '@angular/core';
import { HeaderComponent } from './components/header/header.component';
import { SvgIconComponent } from './components/svg-icon/svg-icon.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [HeaderComponent, SvgIconComponent],
  imports: [
    CommonModule
  ],
  exports: [
    HeaderComponent, SvgIconComponent
  ]
})
export class SharedModule {
}
