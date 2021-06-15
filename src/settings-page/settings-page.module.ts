import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SettingsPageComponent } from './settings-page.component';

@NgModule({
  declarations: [SettingsPageComponent],
  exports: [
    SettingsPageComponent
  ],
  imports: [
    CommonModule
  ]
})
export class SettingsPageModule { }
