import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AntonioLibModule,  } from 'antonio-lib';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AntonioLibModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
