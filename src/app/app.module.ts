import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {SettingsPageModule} from '../settings-page/settings-page.module';
import {SharedModule} from '../shared/shared.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    SettingsPageModule,
    SharedModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
