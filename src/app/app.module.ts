import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import * as NG_MAT from '@angular/material';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NG_MAT.MatAutocompleteModule,
    NG_MAT.MatDatepickerModule,
    NG_MAT.MatTableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
